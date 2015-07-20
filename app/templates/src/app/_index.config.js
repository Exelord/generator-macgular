(function () {
	'use strict';

	var app = angular.module('<%- appName %>');

	app.config(function($logProvider){
		$logProvider.debugEnabled(true);
	});

})();
