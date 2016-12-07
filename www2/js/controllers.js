angular.module('starter.controllers', [])


.controller('AppCtrl', function(){

    
    }
  )


.controller('RegistrationCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('RegistrationCtrl', function($scope) {
 

})


.controller('AccountCtrl', function($scope,$http) {
  $scope.settings = {
    enableFriends: true
  };
   $scope.xyz = function (){
    
    $http.get('https://cors-test.appspot.com/test').then(function(resp) {
        console.log('Success', resp);
        // For JSON responses, resp.data contains the result
        alert("Success");
        }, function(err) {
        alert("failure");
        console.error('ERR', err);
        // err.status will contain the status code
    })


  };
});
