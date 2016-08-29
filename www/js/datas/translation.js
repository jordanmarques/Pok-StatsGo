angular.module('starter.translations', [])

  .factory('Translation', function() {

    var service = {};

    service.getLevels = function(){

      return  service.translation = {

        'TOTO': {fr:"toto", en:"towtow"}
      };

    };

    return service;
  });
