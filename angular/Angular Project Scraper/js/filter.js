angular.module('phonecatfilters', []).filter('search', function() {
	return function (input) {
		return input ? '\u2713' : '\u2718';
	};
});