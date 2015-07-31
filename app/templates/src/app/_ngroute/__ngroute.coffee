home = angular.module '<%- appName %>'

home.config ($routeProvider) ->
  $routeProvider
    .when '/',
      templateUrl: 'app/components/home/partials/home.html'
      controller: 'HomeCtrl'
      controllerAs: 'HomeCtrl'
    .otherwise
      redirectTo: '/'
