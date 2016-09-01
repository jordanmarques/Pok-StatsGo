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

    if(typeof ability != 'undefined'){
      $scope.ability = ability;
    } else if(typeof speAbility != 'undefined'){
      $scope.ability = speAbility;
    }

    var type = Types.getType( $scope.ability.typeEn);
    $scope.weakPokemons = [];

    for(var i = 0; i < type.strengths.length; i++){
      $scope.weakPokemons = $scope.weakPokemons.concat(Pkms.getPokemonByType(type.strengths[i].nameEn))
    }

    for(var i2 = 0; i2 < $scope.weakPokemons.length ; i2++){
      $scope.weakPokemons[i2].cp = parseInt($scope.weakPokemons[i2].cp)
    }

    computePkmsDps($scope.ability.pokemons);

    function computePkmsDps(pkms){
      pkms.forEach(function(pkm){
        pkm.abilityDps = DpsUtil.computeAbilityDpsForPkm($scope.ability, pkm);
      })


    }

  });
