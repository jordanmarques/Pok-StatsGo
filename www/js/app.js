// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in ivService.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic',
                            'starter.ivservices',
                            'starter.dpsservices',
                            'starter.pokemons' ,
                            'starter.speAbilities' ,
                            'starter.abilities',
                            'starter.abilitiesctrl',
                            'starter.pkmsctrl',
                            'starter.levels',
                            'starter.ivBadger',
                            'ionic-toast',
                            'starter.pkmdetailctrl'])

.run(function($rootScope, $ionicPlatform, ionicToast) {
    $rootScope.ENGLISH = "En";
    $rootScope.FRENCH = "Fr";
    $rootScope.language = $rootScope.ENGLISH;

    ionic.keyboard.disable();

    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }

    $rootScope.changeLanguage = function(){

      if( $rootScope.language == $rootScope.FRENCH){

        $rootScope.language = $rootScope.ENGLISH;
        ionicToast.show('English', 'middle', false, 1000);

      } else if($rootScope.language == $rootScope.ENGLISH){

        $rootScope.language = $rootScope.FRENCH;
        ionicToast.show('Français', 'middle', false, 1000);
      }
    }



})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.abilities', {
    url: '/abilities',
    views: {
      'tab-abilities': {
        templateUrl: 'templates/tab-abilities.html',
        controller: 'AbilitiesCtrl'
      }
    }
  })

  .state('tab.pkms', {
      url: '/pkms',
      views: {
        'tab-pkms': {
          templateUrl: 'templates/tab-pkms.html',
          controller: 'PkmsCtrl'
        }
      }
    })

    .state('tab.pkm-detail', {
      url: '/pkm/:pkmId&:name',
      views: {
        'tab-pkms': {
          templateUrl: 'templates/pkms-detail.html',
          controller: 'PkmDetailCtrl'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/pkms');

});
