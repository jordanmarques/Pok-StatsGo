angular.module("starter.ivBadger",[])
  
  .directive("ivBadger", function(){
    return{
      restrict : 'AE',
      replace:false,
      scope: {
        value: "="
      },
      link: function(scope, element) {

        if(scope.value < 60) {
          element.addClass('iv-badge low-iv');
        } else if(scope.value >= 60 && scope.value < 80){
          element.addClass('iv-badge mid-iv');
        }else if(scope.value >= 80){
          element.addClass('iv-badge good-iv');
        }
      }
    }
  });
