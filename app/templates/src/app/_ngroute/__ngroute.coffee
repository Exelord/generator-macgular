home = angular.module 'home.config', []

home.config ($routeProvider) ->
  $routeProvider
    .when '/',
      templateUrl: 'app/components/home/partials/home.html'
      controller: 'HomeCtrl'
      controllerAs: 'HomeCtrl'
    .otherwise
      redirectTo: '/'
