// var myApp = angular.module('myApp', []);
// //The Above Creates the variable set to an angular module
// //The following links the controller

// myApp.controller('myController', ['scope', 'http', function myController($scope, $http) {
// 			$http.get('data.json').success(function(data){
// 	$scope.students = data;
// 			});

// 		}]);
angular.module('', ['ngRoute', 'phonecatControllers', 'phonecatFilters']);
var myApp = angular.module('myApp', []);

function controllerOne ($scope) {
	$scope.students = [
	{"name":"Callie Leone","image":"https://production-startupschool.s3.amazonaws.com/uploads/Photo_on_2-12-14_at_1.08_PM_3.jpg", "track":"Product & Design"},
	{"name":"Chenai  Mparutsa-Brooks","image":"https://production-startupschool.s3.amazonaws.com/uploads/Chenai_profile1.png", "track":"Product & Design"},
	{"name":"Christina Brown","image":"https://production-startupschool.s3.amazonaws.com/uploads/cbrown128.png", "track":"Product & Design"},
	{"name":"Dmitry Pavluk","image":"https://production-startupschool.s3.amazonaws.com/sipeople-studentprofile/studentprofile-301headshot_cropped.jpg", "track":"Product & Design"},
	{"name":"Kristopher Mazara","image":"https://production-startupschool.s3.amazonaws.com/uploads/388225950_1792278450363_474260_n.jpg", "track":"Product & Design"},
	{"name":"Miguel Fondeur","image":"https://production-startupschool.s3.amazonaws.com/uploads/miguelfondeur.jpg", "track":"Product & Design"},
	{"name":"Pedro Cunha","image":"https://production-startupschool.s3.amazonaws.com/uploads/pedro.jpg", "track":"Product & Design"},
	{"name":"Rahat Kukreja","image":"https://production-startupschool.s3.amazonaws.com/uploads/Subway_Profile_short.jpg", "track":"Product & Design"},
	{"name":"Sophia Huang","image":"https://production-startupschool.s3.amazonaws.com/uploads/307a99e.jpg", "track":"Product & Design"},
	{"name":"Xin Wang","image":"https://production-startupschool.s3.amazonaws.com/uploads/image_1.jpg", "track":"Product & Design"},
	{"name":"Camille Basurto","image":"https://production-startupschool.s3.amazonaws.com/uploads/crop_camille.png", "track":"Sales & Account Management"},
	{"name":"Gregory Chin","image":"https://production-startupschool.s3.amazonaws.com/uploads/GC.jpg", "track":"Sales & Account Management"},
	{"name":"Jenny Tan","image":"https://production-startupschool.s3.amazonaws.com/uploads/392jenny2.jpg", "track":"Sales & Account Management"},
	{"name":"Mamta Parakh","image":"https://production-startupschool.s3.amazonaws.com/uploads/317Mamta_Profile_BnW.jpg", "track":"Sales & Account Management"},
	{"name":"Shayan Saber","image":"https://production-startupschool.s3.amazonaws.com/uploads/8543_10100191384256758_1584113508_n.jpg", "track":"Sales & Account Management"},
	{"name":"Stefan Mancevski","image":"https://production-startupschool.s3.amazonaws.com/uploads/1233139_10151699471903020_1317698753_o.jpg", "track":"Sales & Account Management"},
	{"name":"Doug Helferich","image":"https://production-startupschool.s3.amazonaws.com/uploads/404g15-1.jpg", "track":"Web Development"},
	{"name":"Joe Schoech","image":"https://production-startupschool.s3.amazonaws.com/uploads/me.jpg", "track":"Web Development"},
	{"name":"Lori Tiernan","image":"https://production-startupschool.s3.amazonaws.com/uploads/Lori-SINY.png", "track":"Web Development"},
	{"name":"Richard Lau","image":"https://production-startupschool.s3.amazonaws.com/uploads/344IMG_7632.jpg", "track":"Web Development"},
	{"name":"Roger Sperberg","image":"https://production-startupschool.s3.amazonaws.com/uploads/RogerSperberg480x480.jpg", "track":"Web Development"},
	{"name":"Simon Slater","image":"https://production-startupschool.s3.amazonaws.com/uploads/photo_1.jpg", "track":"Web Development"},
	{"name":"Troy Wilson","image":"https://production-startupschool.s3.amazonaws.com/uploads/10150796296987456.jpg", "track":"Web Development"},
	{"name":"Ben Witten","image":"https://production-startupschool.s3.amazonaws.com/sipeople-studentprofile/studentprofile-300Screen Shot 2014-03-28 at 2.13.10 AM.png", "track":"Technical Marketing"},
	{"name":"Cindi Rosner","image":"https://production-startupschool.s3.amazonaws.com/uploads/Cin_SI.jpg", "track":"Technical Marketing"},
	{"name":"Doug Wagner","image":"https://production-startupschool.s3.amazonaws.com/uploads/376Screen_Shot_2014-03-17_at_11.01.16_AM.png", "track":"Technical Marketing"},
	{"name":"Ethan Robinson","image":"https://production-startupschool.s3.amazonaws.com/sipeople-studentprofile/studentprofile-345Screen Shot 2014-03-28 at 12.16.58 PM.png", "track":"Technical Marketing"},
	{"name":"Foladé Bell","image":"https://production-startupschool.s3.amazonaws.com/sipeople-studentprofile/studentprofile-382new-me-photo.jpg", "track":"Technical Marketing"},
	{"name":"Jonah Khandros","image":"https://production-startupschool.s3.amazonaws.com/uploads/367headshot_copy.jpg", "track":"Technical Marketing"},
	{"name":"Julia  Vallois-Greenberg ","image":"https://production-startupschool.s3.amazonaws.com/uploads/378IMG_0856_2.jpg", "track":"Technical Marketing"},
	{"name":"Laura A. Floyd","image":"https://production-startupschool.s3.amazonaws.com/uploads/dhc_linkedin_photo.jpg.jpg", "track":"Technical Marketing"},
	{"name":"Martha Segovia","image":"https://production-startupschool.s3.amazonaws.com/uploads/10151658942332023.jpg", "track":"Technical Marketing"},
	{"name":"Michael Fair","image":"https://production-startupschool.s3.amazonaws.com/uploads/313MF_2013.jpg", "track":"Technical Marketing"},
	{"name":"Mike Hickling","image":"https://production-startupschool.s3.amazonaws.com/uploads/304Mike_-_22714_New.jpeg", "track":"Technical Marketing"},
	{"name":"Sam Korda","image":"https://production-startupschool.s3.amazonaws.com/uploads/3111779946_10202307539322531_1800545465_n.jpg", "track":"Technical Marketing"}
	];
}