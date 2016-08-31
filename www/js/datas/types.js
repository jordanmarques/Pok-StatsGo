angular.module('starter.types', [])

  .factory('Types', function() {

    var service = {};

    service.getTypes = function(){
      return [{"name":"normal","immunes":["ghost"],"weaknesses":["rock","steel"],"strengths":[]},
        {"name":"fire","immunes":[],"weaknesses":["fire","water","rock","dragon"],"strengths":["grass","ice","bug","steel"]},
        {"name":"water","immunes":[],"weaknesses":["water","grass","dragon"],"strengths":["fire","ground","rock"]},
        {"name":"electr","immunes":["ground"],"weaknesses":["electr","grass","dragon"],"strengths":["water","flying"]},
        {"name":"grass","immunes":[],"weaknesses":["fire","grass","poison","flying","bug","dragon","steel"],"strengths":["water","ground","rock"]},
        {"name":"ice","immunes":[],"weaknesses":["fire","water","ice","steel"],"strengths":["grass","ground","flying","dragon"]},
        {"name":"fight","immunes":["ghost"],"weaknesses":["poison","flying","psychc","bug","fairy"],"strengths":["normal","ice","rock","dark","steel"]},
        {"name":"poison","immunes":["steel"],"weaknesses":["poison","ground","rock","ghost"],"strengths":["grass","fairy"]},
        {"name":"ground","immunes":["flying"],"weaknesses":["grass","bug"],"strengths":["fire","electr","poison","rock","steel"]},
        {"name":"flying","immunes":[],"weaknesses":["electr","rock","steel"],"strengths":["grass","fight","bug"]},
        {"name":"psychc","immunes":["dark"],"weaknesses":["psychc","steel"],"strengths":["fight","poison"]},
        {"name":"bug","immunes":[],"weaknesses":["fire","fight","poison","flying","ghost","steel","fairy"],"strengths":["grass","psychc","dark"]},
        {"name":"rock","immunes":[],"weaknesses":["fight","ground","steel"],"strengths":["fire","ice","flying","bug"]},
        {"name":"ghost","immunes":["normal"],"weaknesses":["dark"],"strengths":["psychc","ghost"]},
        {"name":"dragon","immunes":["fairy"],"weaknesses":["steel"],"strengths":["dragon"]},
        {"name":"dark","immunes":[],"weaknesses":["fight","dark","fairy"],"strengths":["psychc","ghost"]},
        {"name":"steel","immunes":[],"weaknesses":["fire","water","electr","steel"],"strengths":["ice","rock","fairy"]},
        {"name":"fairy","immunes":[],"weaknesses":["fire","poison","steel"],"strengths":["fight","dragon","dark"]}]
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

    function getTranslation(type){
      if(!(type in translations)) return {};
      return translations[type];
    }

    return service;
  });
