(function () {
  'use strict';

  var home = angular.module('home', ['home.controller']);

  /** @ngInject */
  home.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/components/home/partials/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'HomeCtrl'
      });

    $urlRouterProvider.otherwise('/');
  });

})();
