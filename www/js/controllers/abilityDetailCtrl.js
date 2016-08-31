angular.module('starter.abilitydetailctrl', ['ionic'])

  .controller('AbilityDetailCtrl', function($scope,
                                        $stateParams,
                                        $ionicScrollDelegate,
                                        DpsUtil,
                                        Ability,
                                        Types,
                                        Pkms,
                                        SpeAbility) {

    var abilityName = $stateParams.abilityName;

    var ability = Ability.getAbilityByName(abilityName);
    var speAbility = SpeAbility.getSpeAbilityByName(abilityName);

    if(ability != 'undefined'){
      $scope.ability = ability;
    } else if( speAbility != 'undefined'){
      $scope.ability = speAbility;
    }

    var type = Types.getType( $scope.ability.typeEn);
    $scope.weakPokemons = [];

    for(var i = 0; i < type.strengths.length; i++){
      $scope.weakPokemons = $scope.weakPokemons.concat(Pkms.getPokemonByType(type.strengths[i].nameEn))
    }

    computePkmsDps($scope.ability.pokemons);

    function computePkmsDps(pkms){
      pkms.forEach(function(pkm){
        pkm.abilityDps = DpsUtil.computeAbilityDpsForPkm($scope.ability, pkm);
      })


    }

  });
