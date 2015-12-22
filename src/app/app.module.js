var routeModule = require('./route.module/route.module');

module.exports = angular.module('app.module', [routeModule.name])
	.run(function(){});


