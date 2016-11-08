var myApp = angular.module('myApp', ['ngRoute','ngCookies']);

myApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/index.html',
      controller: 'usersController as uc'
    })
    .when('/polls', {
      templateUrl: 'partials/polls.html',
      controller: 'pollsController as pc'
    })
    .when('/createPoll', {
      templateUrl: 'partials/createPoll.html',
      controller: 'pollsController as pc'
    })
    .when('/poll/:id', {
      templateUrl: 'partials/singlePoll.html',
      controller: 'pollsController as pc'
    })
    .otherwise({
      redirectTo: '/'
    });
});
