angular.module('App', ['ionic', 'firebase'])

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tour', {
      url: '/tour',
      templateUrl: 'views/tour/tour.html',
      controller: 'TourCtrl'
    })
    .state('home', {
      url: '/',
      templateUrl: 'views/home/home.html',
      controller: 'HomeCtrl'
    })

    .state('registration', {
      url: '/registration',

          templateUrl: 'views/registration/registration.html',
          controller: 'RegistrationCtrl'

    })

    //Remitance modules
    .state('beneficiary', {
      url: '/beneficiary',

         templateUrl: 'views/beneficiary/beneficiarylist.html',
           controller: 'BeneficiaryCtrl'

    })




    .state('beneficiaryDetail', {
      url: '/beneficiaryDetail/:id',

         templateUrl: 'views/beneficiary/beneficiaryDetail.html',
           controller: 'BeneficiaryDetailCtrl'

    })


     .state('currencyCalc', {
      url: '/currencyCalc',

         templateUrl: 'views/currency/currencyCalc.html',
           controller: 'currencyCalcCtrl'

    })






    .state('about', {
      url: '/about',
      templateUrl: 'views/about/about.html'
    })
    .state('reservation', {
      url: '/reservation',
      templateUrl: 'views/reservation/reservation.html',
      controller: 'ReservationCtrl'
    })
    .state('events', {
      url: '/events',
      templateUrl: 'views/events/events.html',
      controller: 'EventsCtrl'
    })
    .state('food', {
      url: '/food',
      templateUrl: 'views/food/food.html',
      controller: 'FoodCtrl'
    })
    .state('weather', {
      url: '/weather',
      templateUrl: 'views/weather/weather.html',
      controller: 'WeatherCtrl'
    })
    .state('local', {
      abstract: true,
      url: '/local',
      templateUrl: 'views/local/local.html'
    })
    .state('local.food', {
      url: '/food',
      views: {
        'local-food': {
          templateUrl: 'views/local/food.html'
        }
      }
    })
    .state('local.beaches', {
      url: '/beaches',
      views: {
        'local-beaches': {
          templateUrl: 'views/local/beaches.html'
        }
      }
    })



    .state('local.sights', {
      url: '/sights',
      views: {
        'local-sights': {
          templateUrl: 'views/local/sights.html'
        }
      }
    })


;

  $urlRouterProvider.otherwise('/');
})

.run(function($ionicPlatform, $location) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

  var firstVisit = localStorage.getItem('firstVisit');
  if (!firstVisit) {
    $location.url('/tour');
  }



})

.factory('EventsService', function ($firebase) {
  var firebase = new Firebase('https://ionic-in-action-demo.firebaseio.com/events');
  var service = $firebase(firebase);
  return service;
})

.factory('MenuService', function ($firebase) {
  var firebase = new Firebase('https://ionic-in-action-demo.firebaseio.com/menu');
  var service = $firebase(firebase);
  return service;
})


.factory('benifitiaryService',['$http',function($http){
    var benifitiary = []; //Private Variable
    return {
        GetBenifitiary: function(){
             return $http.get("api/benifitiary.json").then(function(response){
                 benifitiary = response.data;
                 return benifitiary;
             });

//              return $http.get("http://myremitter.azurewebsites.net/RestServiceImpl.svc/AllRemitter").then(function(response){
//                benifitiary = response;
//                return benifitiary;
//            });
        },
        GetBenifitiaryDetail: function(BenifitiaryId){
            for(i=0;i<benifitiary.length;i++){
                if(benifitiary[i].id == BenifitiaryId){
                    return benifitiary[i];
                }
            }
        }
    }
}])

//Navbar control code goes here
.controller('NavbarCtrl', function ($scope, $ionicSideMenuDelegate) {

  $scope.openMenu = function () {


    $ionicSideMenuDelegate.toggleLeft();

  };

  $scope.logout = function(){
    alert("log out testing");
  }


});
