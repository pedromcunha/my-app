var myApp = angular.module('myApp', []);
//The Above Creates the variable set to an angular module
//The following links the controller

myApp.controller('myController', ['scope', 'http', function myController($scope, $http) {
			$http.get('data.json').success(function(data){
	$scope.students = data;
			});

		}]);