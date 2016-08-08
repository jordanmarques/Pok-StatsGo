angular.module('starter.controllers', ['ionic'])

.controller('AbilitiesCtrl', function($q, $scope, Pkms, $ionicScrollDelegate, $ionicModal) {
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
    })

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
        
        var stab = computeSTAB($scope.modalAbility, pkm);
        
        var pkmDps = ((($scope.modalAbility.damage * pkm.attaque) / 150+2) * stab) / $scope.modalAbility.duration;

        pkm.abilityDps = Math.round(pkmDps * 100) / 100
      })
      
      
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

.controller('PkmsCtrl', function($scope, Pkms, $ionicScrollDelegate) {

  $scope.filter = 'id';
  $scope.search = '';

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

});
