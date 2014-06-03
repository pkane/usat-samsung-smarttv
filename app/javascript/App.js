
// //Routing
// angular.module('usatSmartTv', 'usatSmartTv.controllers')

// .config(function($stateProvider, $urlRouterProvider) {

//   // Set up the various states which the app can be in.
//   // Each state's controller can be found in controllers.js
// $stateProvider
//     .state('app', {
//       url: "/app",
//       abstract: true,
//       templateUrl: "templates/app.html",
//       controller: 'AppCtrl'
//     })

//     .state('app.home', {
//       url: "/section-picker",
//       views: {
//         'menuContent' :{
//           templateUrl: "templates/section-picker.html"
//         }
//       }
//     })    

//     .state('app.about', {
//       url: "/playlist",
//       views: {
//         'menuContent' :{
//           templateUrl: "templates/playlist.html"
//         }
//       }
//     });;

//   // if none of the above states are matched, use this as the fallback
//   $urlRouterProvider.otherwise('/app/home');

// });

///

var usatFeedServices = angular.module('usatSmartTv', ['usatSmartTv.controllers']);

function feedRouteConfig($routeProvider) {
  $routeProvider.
  when('/', {
    controller : 'AppCtrl',
    templateUrl : "app/templates/app.html"
  }).
  when('/section-picker', {
    controller : 'sectionPicker',
    templateUrl: "app/templates/section-picker.html"
  }).
  when('/playlist', {
    controller : 'playList',
    templateUrl: "app/templates/playlist.html"
  }).  
  otherwise({
    redirectTo : '/'
  });
}

usatFeedServices.config(feedRouteConfig);

angular.element(document).ready(function () {
    var $injector = angular.bootstrap(document, ['usatSmartTv']);
    var $controller = $injector.get('$controller');
    var AngularCtrl = $controller('AppCtrl');
    AngularCtrl.setUserName();
});