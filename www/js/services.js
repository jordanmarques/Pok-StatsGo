angular.module('starter.services', [])

.factory('Pkms', function($http) {

  return {

    all: function() {
      
      var pokemonJson = 'json/pokemons.json';
      
      return $http.get(pokemonJson);
    },

    get: function(pkmId) {
      for(i = 0; i < pkms; i++ ){
        if(pkms[i].id == pkmId){
          return pkms[i];
        }
      }
    }

  };
});
