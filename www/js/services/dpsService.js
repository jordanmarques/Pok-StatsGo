angular.module('starter.dpsservices', [])
  
  .factory('DpsUtil', function () {

    service = {};

    service.computeAbilityDpsForPkm = function(ability, pkm){
      var stab = computeSTAB(ability, pkm);

      var pkmDps = (((ability.damage * pkm.attaque) / 150 + 2) * stab) / ability.duration;

      return ability.pkmDps = parseFloat(Math.round(pkmDps * 100) / 100);
    };

    function computeSTAB(ability, pkm){
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
