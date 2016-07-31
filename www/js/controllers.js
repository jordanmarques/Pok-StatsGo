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
  $scope.isLoading = true;

  $scope.pkms = Pkms.getPokemons().success(function(data){
    $scope.pkms = data;
    $scope.isLoading = false;
  });
})

.controller('PkmDetailCtrl', function($scope, $stateParams, Pkms) {
  var pkmId = $stateParams.pkmId;
  $scope.pkm = {};
  $scope.pkm.name = $stateParams.name;

  Pkms.getPokemons().success(function(data){
    for(i = 0; i < data.length; i++ ){
      if(data[i].id == pkmId){
        $scope.pkm = data[i];
      }
    }
  })


})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
