angular.module('starter.pkmdetailctrl', ['ionic'])

  .controller('PkmDetailCtrl', function($scope,
                                        $stateParams,
                                        $ionicScrollDelegate,
                                        $timeout,
                                        Pkms,
                                        DpsUtil,
                                        ivCalculator,
                                        $ionicPopup,
                                        $location,
                                        $anchorScroll) {
    var pkmId = $stateParams.pkmId;
    $scope.pkm = {};
    $scope.perfection = {};
    $scope.pkm.name = "#" + $stateParams.name;


    var data = Pkms.getPokemons();
    for(var i = 0; i < data.length; i++ ){
      if(data[i].id == pkmId){
        $scope.pkm = data[i];
        computeAbilitiesDpsForPkm($scope.pkm);
        break;
      }
    }

    $scope.computeIv = function(name, cp, hp, dust){
      $scope.ivsErrors = false;

      try{
        $scope.ivs = ivCalculator.evaluate(name, cp, hp, dust);
        extractPerfectionMinAndMax($scope.ivs);
        extractPerfectionAverage($scope.ivs);
        scrollToResult();
      } catch(e) {
        $scope.ivsErrors = true;
      }

    };

    $scope.showAlert = function() {
      var alertPopup = $ionicPopup.alert({
        title: 'Information',
        template: 'Ce calculateur permet de calculer les Iv de vos Pokémons.\n' +
        'Il suffit simplement de renseigner les valeurs de votre pokémon dans les champs ci-dessous',
        okType:'button  button-assertive button-outline'
      });
    };

    function computeAbilitiesDpsForPkm(pkm) {

      pkm.abilities.forEach(function(ability){
        ability.pkmDps = DpsUtil.computeAbilityDpsForPkm(ability, pkm)
      });

      pkm.speAbilities.forEach(function(speAbility){
        speAbility.pkmDps = DpsUtil.computeAbilityDpsForPkm(speAbility, pkm)
      });
    }

    function extractPerfectionMinAndMax(ivArray){
      var perfectionArray = Array.from(ivArray, function(x){
        return x.perfection
      });

      $scope.perfection.min = Math.min.apply(null, perfectionArray);
      $scope.perfection.max = Math.max.apply(null, perfectionArray);
    }

    function extractPerfectionAverage(ivArray){
      var sum = 0;
      ivArray.forEach(function(iv){
        sum = sum + iv.perfection;
      });

      $scope.perfection.average = Math.round(sum / ivArray.length)
    }

    function scrollToResult(){
      $location.hash('result');
      $anchorScroll();
      
    }

  });
