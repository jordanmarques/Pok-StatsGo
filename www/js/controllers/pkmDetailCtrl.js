angular.module('starter.pkmdetailctrl', ['ionic'])

  .controller('PkmDetailCtrl', function($scope, $stateParams, Pkms, DpsUtil, ivCalculator) {
    var pkmId = $stateParams.pkmId;
    $scope.pkm = {};
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
      } catch(e) {
        $scope.ivsErrors = true;
      }

    };

    function computeAbilitiesDpsForPkm(pkm) {

      pkm.abilities.forEach(function(ability){
        ability.pkmDps = DpsUtil.computeAbilityDpsForPkm(ability, pkm)
      });

      pkm.speAbilities.forEach(function(speAbility){
        speAbility.pkmDps = DpsUtil.computeAbilityDpsForPkm(speAbility, pkm)
      });
    }

  });
