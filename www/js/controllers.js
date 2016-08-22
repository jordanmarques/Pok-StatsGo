angular.module('starter.controllers', ['ionic'])

.controller('AbilitiesCtrl', function($q, $scope, Pkms, $ionicScrollDelegate, $ionicModal, DpsUtil) {
    $scope.isSimpleActive = true;
    $scope.filter ='';

    $scope.scrollTop = function() {
      $ionicScrollDelegate.scrollTop();
    };

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
    });

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

.controller('PkmsCtrl', function($scope, Pkms, $ionicScrollDelegate, ivCalculator) {

  $scope.filter = 'id';
  $scope.search = '';

  console.log(ivCalculator.evaluate('Ivysaur', 608, 59, 1600));

  $scope.scrollTop = function() {
    $ionicScrollDelegate.scrollTop();
  };

  Pkms.getPokemons().success(function(data){
    $scope.pkms = data;
    $scope.pkms.forEach(function(pkm){
      pkm.cp = parseInt(pkm.cp)
    })
  });

})

.controller('PkmDetailCtrl', function($scope, $stateParams, Pkms, DpsUtil) {
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
      ability.pkmDps = DpsUtil.computeAbilityDpsForPkm(ability, pkm)
    });

    pkm.speAbilities.forEach(function(speAbility){
      speAbility.pkmDps = DpsUtil.computeAbilityDpsForPkm(speAbility, pkm)
    });
  }

});
