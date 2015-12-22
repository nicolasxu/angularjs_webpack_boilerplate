
require('./scss/style.scss');
require('jquery');
require('angular');
require('file?name=[name].html!./index.html_direct');


var appModule = require('./app.module.js');


angular.element(document).ready(function(){

	 
	
	angular.bootstrap(document, [appModule.name]);

});