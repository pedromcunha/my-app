var egghead = angular.module("egghead", []);

egghead.controller('AppCtrl', function () {
	var app = this;
	app.message = "Hello";
})

egghead.directive("MyFirstDirective", function() {
	return function() {
		console.log("Hello");
	}
})