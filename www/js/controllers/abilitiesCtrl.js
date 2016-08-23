angular.module('starter.abilitiesctrl', ['ionic'])

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


    $ionicModal.fromTemplateUrl('templates/modal-template/ability-detail.html', {
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
  });
