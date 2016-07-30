angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('PkmsCtrl', function($scope, Pkms) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  Pkms.all().success(function(data){
    $scope.pkms = data;
  });
})

.controller('PkmDetailCtrl', function($scope, $stateParams, Pkms) {
  $scope.pkm = Pkms.get($stateParams.pkmId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
