angular.module('starter.types', [])

  .factory('Types', function() {

    var service = {};

    service.getType = function(type){
      var typeCopy = angular.copy(types[type]);

      for(var index in typeCopy){
        translateArray(typeCopy[index])
      }
      return typeCopy;
    };


    function translateArray(typeArray){
      for(var i = 0; i < typeArray.length; i++){
        typeArray[i] = getTranslation(typeArray[i])
      }
    }

    function getTranslation(type){
      if(!(type in translations)) return {};
      return translations[type];
    }

    var types = {
        "normal" : {"immunes":["ghost"],"weaknesses":["rock","steel"],"strengths":[]},
        "fire" : {"immunes":[],"weaknesses":["fire","water","rock","dragon"],"strengths":["grass","ice","bug","steel"]},
        "water" : {"immunes":[],"weaknesses":["water","grass","dragon"],"strengths":["fire","ground","rock"]},
        "electr" : {"immunes":["ground"],"weaknesses":["electr","grass","dragon"],"strengths":["water","flying"]},
        "grass" : {"immunes":[],"weaknesses":["fire","grass","poison","flying","bug","dragon","steel"],"strengths":["water","ground","rock"]},
        "ice" : {"immunes":[],"weaknesses":["fire","water","ice","steel"],"strengths":["grass","ground","flying","dragon"]},
        "fight" : {"immunes":["ghost"],"weaknesses":["poison","flying","psychc","bug","fairy"],"strengths":["normal","ice","rock","dark","steel"]},
        "poison" : {"immunes":["steel"],"weaknesses":["poison","ground","rock","ghost"],"strengths":["grass","fairy"]},
        "ground" : {"immunes":["flying"],"weaknesses":["grass","bug"],"strengths":["fire","electr","poison","rock","steel"]},
        "flying" : {"immunes":[],"weaknesses":["electr","rock","steel"],"strengths":["grass","fight","bug"]},
        "psychc" : {"immunes":["dark"],"weaknesses":["psychc","steel"],"strengths":["fight","poison"]},
        "bug" : {"immunes":[],"weaknesses":["fire","fight","poison","flying","ghost","steel","fairy"],"strengths":["grass","psychc","dark"]},
        "rock" : {"immunes":[],"weaknesses":["fight","ground","steel"],"strengths":["fire","ice","flying","bug"]},
        "ghost" : {"immunes":["normal"],"weaknesses":["dark"],"strengths":["psychc","ghost"]},
        "dragon" : {"immunes":["fairy"],"weaknesses":["steel"],"strengths":["dragon"]},
        "dark" : {"immunes":[],"weaknesses":["fight","dark","fairy"],"strengths":["psychc","ghost"]},
        "steel" : {"immunes":[],"weaknesses":["fire","water","electr","steel"],"strengths":["ice","rock","fairy"]},
        "fairy" : {"immunes":[],"weaknesses":["fire","poison","steel"],"strengths":["fight","dragon","dark"]}
  };

    var translations = {
      "normal" : {nameFr:"normal", nameEn:"normal"},
      "fire" : {nameFr:"feu", nameEn:"fire"},
      "water" : {nameFr:"eau", nameEn:"water"},
      "electr" : {nameFr:"éleck", nameEn:"electr"},
      "grass" : {nameFr:"plante", nameEn:"grass"},
      "ice" : {nameFr:"glace", nameEn:"ice"},
      "fight" : {nameFr:"combat", nameEn:"fight"},
      "poison" : {nameFr:"poison", nameEn:"poison"},
      "ground" : {nameFr:"sol", nameEn:"ground"},
      "flying" : {nameFr:"vol", nameEn:"flying"},
      "psychc" : {nameFr:"psy", nameEn:"psychc"},
      "bug" : {nameFr:"insecte", nameEn:"bug"},
      "rock" : {nameFr:"roche", nameEn:"rock"},
      "ghost" : {nameFr:"spectre", nameEn:"ghost"},
      "dragon" : {nameFr:"dragon", nameEn:"dragon"},
      "dark" : {nameFr:"ténèbres", nameEn:"dark"},
      "steel" : {nameFr:"acier", nameEn:"steel"},
      "fairy" : {nameFr:"fée", nameEn:"fairy"}
    };

    return service;
  });
