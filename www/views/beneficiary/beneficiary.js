angular.module('App').controller('BeneficiaryCtrl', function ($scope, benifitiaryService ) {

  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var day = new Date().getDay();
  var index = 0;
  //$scope.events = EventsService.$asArray();

benifitiaryService.GetBenifitiary().then(function(data){
        $scope.benifitiaryData  = data;
      }  
)



$scope.benifitiaryDetailData = function (id){
  return $scope.benifitiaryData[id-1];
} 

  /*$scope.events.$loaded().then(function () {
    while (day != index && index < 7) {
      $scope.events.push($scope.events.shift());
      index++;
    }
  });*/
});


