(function () {
  'use strict';

  var home = angular.module('home.config', []);

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
