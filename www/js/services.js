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
});
