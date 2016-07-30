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

  $scope.pkms = Pkms.all().success(function(data){
    $scope.pkms = data;
    for(i = 0; i <  $scope.pkms.length; i++ ){
        $scope.pkms[i].types =  $scope.pkms[i].types.split(" ")
        $scope.pkms[i].abilities =  $scope.pkms[i].abilities.split("\n")
        $scope.pkms[i].speAbilities =  $scope.pkms[i].speAbilities.split("\n")
      
    }
    $scope.isLoading = false;
  });
})

.controller('PkmDetailCtrl', function($scope, $stateParams, Pkms) {
  var pkmId = $stateParams.pkmId;
  $scope.pkm = {};
  $scope.pkm.name = $stateParams.name;

  Pkms.all().success(function(data){
    for(i = 0; i < data.length; i++ ){
      if(data[i].id == pkmId){
        $scope.pkm = data[i];
        $scope.pkm.types = $scope.pkm.types.split(" ")
        $scope.pkm.abilities = $scope.pkm.abilities.split("\n")
        $scope.pkm.speAbilities = $scope.pkm.speAbilities.split("\n")
      }
    }
  })


})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
