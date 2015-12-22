
module.exports = angular.module('vendor.module', [])
	.controller('vendorController', vendorControllerFunc);


vendorControllerFunc.$inject = ['$log', '$scope'];
function vendorControllerFunc($log, $scope) {
	var vm = this;
	vm.timeStamp = new Date().getTime();
}