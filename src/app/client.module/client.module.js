
module.exports = angular.module('client.module', [])
	.controller('clientController', clientControllerFunc);

clientControllerFunc.$inject = ['$q', '$location'];

function clientControllerFunc($q, $location) {
	var vm = this;
	vm.timeStamp = new Date().getTime();
	
}