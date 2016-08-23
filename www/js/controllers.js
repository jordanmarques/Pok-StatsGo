angular.module('starter.controllers', ['ionic'])

.controller('AbilitiesCtrl', function($q, $scope, SpeAbility, Ability, $ionicScrollDelegate, $ionicModal, DpsUtil) {
    $scope.isSimpleActive = true;
    $scope.filter ='';

    $scope.scrollTop = function() {
      $ionicScrollDelegate.scrollTop();
    };

    $scope.abilities = Ability.getAbilities();
    $scope.speAbilities = SpeAbility.getSpeAbilities();

    $scope.abilities.forEach(function(ability){
      ability.dps = parseFloat(ability.dps);
    });

    $scope.speAbilities.forEach(function(speAbility){
      speAbility.dps = parseFloat(speAbility.dps);
    });

    $scope.allAbilities = $scope.abilities;
    

    $ionicModal.fromTemplateUrl('modal-template/ability-detail.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
    $scope.openModal = function(ability) {
      $scope.modalAbility = ability;
      computePkmsDps($scope.modalAbility.pokemons);
      $scope.modal.show();
    };
    $scope.closeModal = function() {
      $scope.modal.hide();
    };
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });

    function computePkmsDps(pkms){
      pkms.forEach(function(pkm){
        pkm.abilityDps = DpsUtil.computeAbilityDpsForPkm($scope.modalAbility, pkm);
      })


    }
})

.controller('PkmsCtrl', function($scope, Pkms, $ionicScrollDelegate) {

  $scope.filter = 'id';
  $scope.search = '';

  $scope.scrollTop = function() {
    $ionicScrollDelegate.scrollTop();
  };

  $scope.pkms = Pkms.getPokemons();
  $scope.pkms.forEach(function(pkm){
    pkm.cp = parseInt(pkm.cp)
  });

})

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

  $scope.cp=608;
  $scope.hp=59;
  $scope.dust=1600;

  $scope.computeIv = function(name, cp, hp, dust){
    // $scope.ivsErrors = false;

    // try{
      $scope.ivs = ivCalculator.evaluate(name, cp, hp, dust);
    // } catch(e) {
    //   $scope.ivsErrors = true;
    // }

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
