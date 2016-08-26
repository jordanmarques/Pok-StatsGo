angular.module("starter.ivAnalyser",[])

  .directive("ivAnalyser", function(){
    return{
      restrict : 'AEC',
      replace:false,
      scope: {
        ivAverage: "="
      },
      link: function(scope, element) {

        

        scope.$watch('ivAverage', function () {

          var span = element.find('span');
          span.remove();
          
          if(scope.ivAverage < 70){
            element.append("<span id='sentence'>Ce Pokémon n'est pas bon, essayez d'en attraper un meilleur !</span>")
          } else if(scope.ivAverage >= 70 && scope.ivAverage < 80){
            element.append("<span id='sentence'>Ce Pokémon a des IV convenable mais vous pouvez trouver mieux. </span>")
          } else if (scope.ivAverage >= 80 && scope.ivAverage < 100){
            element.append("<span id='sentence'>Ce Pokémon a de très bonnes IV, Vous pouvez l'utiliser en arène !</span>")
          } else if ( scope.ivAverage == 100){
            element.append("<span id='sentence'>Ce Pokémon est le meilleur possible, augmentez ses CP au maximum !</span>")
          }
        },true)
      }
    }
  });
