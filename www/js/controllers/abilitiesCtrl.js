angular.module('starter.abilitiesctrl', ['ionic'])

  .controller('AbilitiesCtrl', function($q, $scope, SpeAbility, Ability, $ionicScrollDelegate, $ionicModal, DpsUtil) {
    $scope.isSimpleActive = true;
    $scope.filter ='';

    $scope.scrollTop = function() {
      $ionicScrollDelegate.scrollTop(true);
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
    
  });
