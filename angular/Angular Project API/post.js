angular.module('app')
	.provide('Post', function() {
	this.$get = ['$resource', function($resource) {
		var Post = $resource('http://localhost:27017//api/post/:_id', {}, {
			update: {
				method: 'PUT'
			}
		})
		return Post;
	}];
})