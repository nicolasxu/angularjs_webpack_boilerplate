
require('angular');
require('angular-route');
var clientModule = require('../client.module/client.module');
var vendorModule = require('../vendor.module/vendor.module');



module.exports = angular.module('route.module', 
	[clientModule.name, vendorModule.name, 'ngRoute'])
	.config(routeConfigFunc)
	.controller('testController', ['$log', function($log){}]);


routeConfigFunc.$inject = ['$routeProvider'];
function routeConfigFunc($routeProvider) {
	$routeProvider
		.when('/client', {
			template: require('../client.module/client.html'), 
			controller: 'clientController',
			controllerAs: 'clientVm'
		})
		.when('/vendor', {
			template: require('../vendor.module/vendor.html'),
			controller: 'vendorController',
			controllerAs: 'vendorVm'
		});

}
