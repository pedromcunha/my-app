// var myApp = angular.module('myApp', []);
// //The Above Creates the variable set to an angular module
// //The following links the controller

// myApp.controller('myController', ['scope', 'http', function myController($scope, $http) {
// 			$http.get('data.json').success(function(data){
// 	$scope.students = data;
// 			});

// 		}]);
var myAoo = angular.module('myApp', []);

function controllerOne ($scope) {
	$scope.students = [ 
	{
		"name" : "Pedro Cunha",
		"shortname" : "Pedro_Cunha",
		"reknown" : "Front End Developer",
		"bio" : "Aspiring to become a front end dev."
 	},
 		{
		"name" : "Miguel Fonduer",
		"shortname" : "Miguel_Fondeur",
		"reknown" : "Front End Developer",
		"bio" : "Looking for become the next stack creator"
 	},
 		{
		"name" : "Dmitry Pavluk",
		"shortname" : "Dmitry_Pavluk",
		"reknown" : "UI/UX Engineer",
		"bio" : "Best questions ever"
 	},
 		{
		"name" : "Ethan Robinson",
		"shortname" : "Ethan_Robinson",
		"reknown" : "Biz Development/Marketing",
		"bio" : "Can analyze and sell the shit out of anything"
 	},
 		{
		"name" : "Xin Wang",
		"shortname" : "Xin_Wang",
		"reknown" : "Product Manager",
		"bio" : "Gets shit done"
 	}

	];
}