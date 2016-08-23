angular.module('starter.pkmsctrl', ['ionic'])

  .controller('PkmsCtrl', function($scope, Pkms, $ionicScrollDelegate) {

    $scope.filter = 'id';
    $scope.search = '';

    $scope.scrollTop = function() {
      $ionicScrollDelegate.scrollTop();
    };

    $scope.pkms = Pkms.getPokemons();
    $scope.pkms.forEach(function(pkm){
      pkm.cp = parseInt(pkm.cp)
    });

  });

