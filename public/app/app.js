angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider) {
 $locationProvider.html5Mode(true);
 $routeProvider.when('/', {templateUrl : '/partials/main/main', controller: 'mvMainCtrl'});
});

angular.module('app').config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/documentation', {templateUrl : '/partials/main/documentation', controller: 'mvMainCtrl'});
   });

angular.module('app').config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/modules', {templateUrl : '/partials/main/modules', controller: 'mvMainCtrl'});
   });

angular.module('app').config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/tutorial', {templateUrl : '/partials/main/tutorial', controller: 'mvMainCtrl'});
   });

   angular.module('app').config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/software', {templateUrl : '/partials/main/software', controller: 'mvMainCtrl'});
   });

   angular.module('app').config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/ressources/Release.7z', {templateUrl : '/partials/main/software', controller: 'mvMainCtrl'});
   });


angular.module('app').controller('mvMainCtrl', function($scope) {
    $scope.myVar = "Hello Angular";
    $scope.fileHref = "/ressources/release.7z";
});


/**
 * Created by guill on 21/07/2017.
 */
