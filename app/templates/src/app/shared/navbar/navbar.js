(function () {
  'use strict';

  var navbar = angular.module('macgular');

  navbar.controller('NavbarCtrl', function () {
    var vm = this;
    vm.name = "moje";
  });

  navbar.directive('macNavbar', function() {
    return {
      restrict: 'E',
      templateUrl:"app/shared/navbar/partials/navbar.html",
      controller: "NavbarCtrl",
      controllerAs: 'NavbarCtrl',
    };
  });

})();
