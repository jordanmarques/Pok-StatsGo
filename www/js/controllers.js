angular.module('starter.controllers', ['ionic'])

.controller('AbilitiesCtrl', function($q, $scope, Pkms) {
    $scope.isSimpleActive = true

    $q.all([Pkms.getAbilities(), Pkms.getSpeAbilities()]).then(function(data){
      $scope.abilities = data[0].data;
      $scope.speAbilities = data[1].data;

      $scope.abilities.forEach(function(ability){
        ability.dps = parseFloat(ability.dps);
      });

      $scope.speAbilities.forEach(function(speAbility){
        speAbility.dps = parseFloat(speAbility.dps);
      });

      $scope.allAbilities = $scope.abilities;

    })
})

.controller('PkmsCtrl', function($scope, Pkms) {

  Pkms.getPokemons().success(function(data){
    $scope.pkms = data;
  });

})

.controller('PkmDetailCtrl', function($scope, $stateParams, Pkms) {
  var pkmId = $stateParams.pkmId;
  $scope.pkm = {};
  $scope.pkm.name = "#" + $stateParams.name;

  Pkms.getPokemons().success(function(data){
    for(var i = 0; i < data.length; i++ ){
      if(data[i].id == pkmId){
        $scope.pkm = data[i];
        computeAbilitiesDpsForPkm($scope.pkm);
        break;
      }
    }
  });

  function computeAbilitiesDpsForPkm(pkm) {

    pkm.abilities.forEach(function(ability){
      computeAbilityDpsForPkm(ability, pkm)
    });

    pkm.speAbilities.forEach(function(speAbility){
      computeAbilityDpsForPkm(speAbility, pkm)
    });
  }

  function computeAbilityDpsForPkm(ability, pkm){

    var stab = computeSTAB(ability, pkm);

    var pkmDps = (((ability.damage * pkm.attaque) / 150+2) * stab) / ability.duration

    ability.pkmDps = Math.round(pkmDps * 100) / 100

  }

  function computeSTAB(ability, pkm){
    var stab = 1;

    pkm.typesEn.forEach(function(type){
      if(type == ability.typeEn){
        stab = 1.5
      }
    });

    return stab;
  }

})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
