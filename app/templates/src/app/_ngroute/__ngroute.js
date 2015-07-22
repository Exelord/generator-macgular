(function () {
  'use strict';

  var home = angular.module('home', ['home.controller']);

  home.config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'app/components/home/partials/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'HomeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
})();
