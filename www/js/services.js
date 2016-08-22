angular.module('starter.services', [])

.factory('Pkms', function($http) {

  return {

    getPokemons: function() {
      return $http.get('json/pokemons.json');
    },
    getAbilities: function(){
      return $http.get('json/abilities.json');
    },
    getSpeAbilities: function(){
      return $http.get('json/speAbilities.json');
    }

  };
})

.factory('DpsUtil', function () {
  
  service = {};
  
    service.computeAbilityDpsForPkm = function(ability, pkm){
      var stab = service.computeSTAB(ability, pkm);

      var pkmDps = (((ability.damage * pkm.attaque) / 150 + 2) * stab) / ability.duration;

      return ability.pkmDps = Math.round(pkmDps * 100) / 100;
    };

    service.computeSTAB = function(ability, pkm){
      var stab = 1;

      pkm.typesEn.forEach(function(type){
        if(type == ability.typeEn){
          stab = 1.5
        }
      });

      return stab;
    };
  
  return service;

});
