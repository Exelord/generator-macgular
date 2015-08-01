home = angular.module 'home.config', []

home.config ($stateProvider, $urlRouterProvider) ->
  $stateProvider
    .state 'home',
      url: '/'
      templateUrl: 'app/components/home/partials/home.html'
      controller: 'HomeCtrl'
      controllerAs: 'HomeCtrl'

  $urlRouterProvider.otherwise '/'
