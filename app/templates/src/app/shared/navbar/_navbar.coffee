navbar = angular.module '<%- appName %>'

navbar.controller 'NavbarCtrl', () ->
  vm = this
  vm.name = "moje"

navbar.directive 'macNavbar', () ->
  return {
    restrict: 'E',
    templateUrl:"app/shared/navbar/partials/navbar.html",
    controller: "NavbarCtrl",
    controllerAs: 'NavbarCtrl',
  }
