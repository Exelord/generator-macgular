(function () {
	'use strict';

	var home = angular.module('home.controller', []);

	home.controller('HomeCtrl', function ($scope)
	{
			var vm = this;
			vm.vale = 10;
			vm.change = 0;

			vm.changer = function() {
				vm.vale++;
			};

			$scope.$watch(function(){return vm.vale;}, function(newVal, oldVal) {
				if (newVal !== oldVal) {
					vm.change++;
				}
			});

	});

})();
