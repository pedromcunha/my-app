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
	{"name":"Callie Leone","image":"https://production-startupschool.s3.amazonaws.com/uploads/Photo_on_2-12-14_at_1.08_PM_3.jpg"},
	{"name":"Chenai  Mparutsa-Brooks","image":"https://production-startupschool.s3.amazonaws.com/uploads/Chenai_profile1.png"},
	{"name":"Christina Brown","image":"https://production-startupschool.s3.amazonaws.com/uploads/cbrown128.png"},
	{"name":"Dmitry Pavluk","image":"https://production-startupschool.s3.amazonaws.com/sipeople-studentprofile/studentprofile-301headshot_cropped.jpg"},
	{"name":"Kristopher Mazara","image":"https://production-startupschool.s3.amazonaws.com/uploads/388225950_1792278450363_474260_n.jpg"},
	{"name":"Miguel Fondeur","image":"https://production-startupschool.s3.amazonaws.com/uploads/miguelfondeur.jpg"},
	{"name":"Pedro Cunha","image":"https://production-startupschool.s3.amazonaws.com/uploads/pedro.jpg"},
	{"name":"Rahat Kukreja","image":"https://production-startupschool.s3.amazonaws.com/uploads/Subway_Profile_short.jpg"},
	{"name":"Sophia Huang","image":"https://production-startupschool.s3.amazonaws.com/uploads/307a99e.jpg"},
	{"name":"Xin Wang","image":"https://production-startupschool.s3.amazonaws.com/uploads/image_1.jpg"},
	{"name":"Camille Basurto","image":"https://production-startupschool.s3.amazonaws.com/uploads/crop_camille.png"},
	{"name":"Gregory Chin","image":"https://production-startupschool.s3.amazonaws.com/uploads/GC.jpg"},
	{"name":"Jenny Tan","image":"https://production-startupschool.s3.amazonaws.com/uploads/392jenny2.jpg"},
	{"name":"Mamta Parakh","image":"https://production-startupschool.s3.amazonaws.com/uploads/317Mamta_Profile_BnW.jpg"},
	{"name":"Shayan Saber","image":"https://production-startupschool.s3.amazonaws.com/uploads/8543_10100191384256758_1584113508_n.jpg"},
	{"name":"Stefan Mancevski","image":"https://production-startupschool.s3.amazonaws.com/uploads/1233139_10151699471903020_1317698753_o.jpg"},
	{"name":"Doug Helferich","image":"https://production-startupschool.s3.amazonaws.com/uploads/404g15-1.jpg"},
	{"name":"Joe Schoech","image":"https://production-startupschool.s3.amazonaws.com/uploads/me.jpg"},
	{"name":"Lori Tiernan","image":"https://production-startupschool.s3.amazonaws.com/uploads/Lori-SINY.png"},
	{"name":"Richard Lau","image":"https://production-startupschool.s3.amazonaws.com/uploads/344IMG_7632.jpg"},
	{"name":"Roger Sperberg","image":"https://production-startupschool.s3.amazonaws.com/uploads/RogerSperberg480x480.jpg"},
	{"name":"Simon Slater","image":"https://production-startupschool.s3.amazonaws.com/uploads/photo_1.jpg"},
	{"name":"Troy Wilson","image":"https://production-startupschool.s3.amazonaws.com/uploads/10150796296987456.jpg"},
	{"name":"Ben Witten","image":"https://production-startupschool.s3.amazonaws.com/sipeople-studentprofile/studentprofile-300Screen Shot 2014-03-28 at 2.13.10 AM.png"},
	{"name":"Cindi Rosner","image":"https://production-startupschool.s3.amazonaws.com/uploads/Cin_SI.jpg"},
	{"name":"Doug Wagner","image":"https://production-startupschool.s3.amazonaws.com/uploads/376Screen_Shot_2014-03-17_at_11.01.16_AM.png"},
	{"name":"Ethan Robinson","image":"https://production-startupschool.s3.amazonaws.com/sipeople-studentprofile/studentprofile-345Screen Shot 2014-03-28 at 12.16.58 PM.png"},
	{"name":"Foladé Bell","image":"https://production-startupschool.s3.amazonaws.com/sipeople-studentprofile/studentprofile-382new-me-photo.jpg"},
	{"name":"Jonah Khandros","image":"https://production-startupschool.s3.amazonaws.com/uploads/367headshot_copy.jpg"},
	{"name":"Julia  Vallois-Greenberg ","image":"https://production-startupschool.s3.amazonaws.com/uploads/378IMG_0856_2.jpg"},
	{"name":"Laura A. Floyd","image":"https://production-startupschool.s3.amazonaws.com/uploads/dhc_linkedin_photo.jpg.jpg"},
	{"name":"Martha Segovia","image":"https://production-startupschool.s3.amazonaws.com/uploads/10151658942332023.jpg"},
	{"name":"Michael Fair","image":"https://production-startupschool.s3.amazonaws.com/uploads/313MF_2013.jpg"},
	{"name":"Mike Hickling","image":"https://production-startupschool.s3.amazonaws.com/uploads/304Mike_-_22714_New.jpeg"},
	{"name":"Sam Korda","image":"https://production-startupschool.s3.amazonaws.com/uploads/3111779946_10202307539322531_1800545465_n.jpg"}
	];
}