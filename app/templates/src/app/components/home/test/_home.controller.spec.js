(function() {
  'use strict';

  describe('controllers', function(){

    beforeEach(module('home.controller'));
    var $scope, ctrl;

    beforeEach(inject(function ($controller, $rootScope) {
       $scope = $rootScope.$new();
       ctrl = $controller("HomeCtrl", {$scope:$scope });
       $scope.$digest();
    }));

    it('should vale has a number', function() {
      expect(ctrl.vale).toEqual(jasmine.any(Number));
    });

    it('should change has 1', function() {
      ctrl.changer();
      $scope.$digest();
      expect(ctrl.change).toEqual(1);
    });

  });
})();
