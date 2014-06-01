
//Routing
angular.module('usatSmartTv', ['angularLocalStorage', 'staticWeather.controllers'])


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // AngularUI Router uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
$stateProvider
    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/app.html",
      controller: 'AppCtrl'
    })

    .state('app.home', {
      url: "/section-picker",
      views: {
        'menuContent' :{
          templateUrl: "templates/section-picker.html"
        }
      }
    })    

    .state('app.about', {
      url: "/playlist",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlist.html"
        }
      }
    });;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');

});



