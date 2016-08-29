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
                                        $rootScope,
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

    $scope.roundBorder = function(index, type){

      var abilitiesLength = $scope.pkm.abilities.length;
      var speAbilitiesLength = $scope.pkm.speAbilities.length;

      if(type == "simple"){
        if(index == 0){
          return "radius-tl"
        } else if(index == abilitiesLength-1){
          if(abilitiesLength > speAbilitiesLength){
            return "radius-br radius-bl"
          } else{
            return "radius-bl"
          }
        }

      }else if(type =="charged"){
        if(index == 0){
          return "radius-tr"
        } else if(index == speAbilitiesLength-1){
          if(speAbilitiesLength > abilitiesLength ){
            return "radius-br radius-bl"
          } else{
            return "radius-br"
          }
        }
      }

    };

    $scope.computeIv = function(name, cp, hp, dust){
      $scope.ivsErrors = false;

      try{
        $scope.ivs = ivCalculator.evaluate(name, cp, hp, dust);
        extractPerfectionMinAndMax($scope.ivs);
        extractPerfectionAverage($scope.ivs);
        analysis($scope.perfection.average);
        scrollToResult();
      } catch(e) {
        $scope.ivsErrors = true;
      }

    };

    $scope.showAlert = function() {
      var template = "";
      if($rootScope.language == $rootScope.FRENCH){
        template = 'Ce calculateur permet de calculer les Iv de vos Pokémons.\n' +
          'Il suffit simplement de renseigner les valeurs de votre pokémon dans les champs ci-dessous'
      } else {
        template = 'This calculator simply calculates your pokémons IV.\n' +
          'You just need to fill the following inputs with your pokémon\'s values'
      }

      var alertPopup = $ionicPopup.alert({
        title: 'Information',
        template: template,
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

    function analysis(average){
      var sentences = {
        BAD : {
            Fr : "Ce Pokémon n'est pas bon, essayez d'en attraper un meilleur !",
            En : "This Pokémon is not good, try to catch a better one !"},
        NOTBAD : {
            Fr : "Ce Pokémon a d'assez bonnes IV.",
            En : "This Pokémon has pretty good IV"},
        GOOD : {
            Fr : "Ce Pokémon a de très bonnes IV, Vous pouvez l'utiliser en arène !",
            En : "This pokémon has very good IV, use it in gym "},
        EXCELLENT : {
            Fr : "Ce Pokémon est le meilleur possible, augmentez ses CP au maximum !",
            En : "This pokémon is just excellent !"}
      };

        if(average < 70){
          $scope.analysis = sentences['BAD']
        } else if(average >= 70 && average < 80){
          $scope.analysis = sentences['NOTBAD']
        } else if (average >= 80 && average < 100){
          $scope.analysis = sentences['GOOD']
        } else if ( scope.ivAverage == 100){
          $scope.analysis = sentences['EXCELLENT']
        }

    }

  });
