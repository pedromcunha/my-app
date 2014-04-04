angular.module('app')
	.controller('MainCtrl', ['$route', 'Post',
		function($scope, $route, Post) {
			$scope.post = new Post();
			$scope.posts = Post.query();

			$scope.save = function () {
				$scope.post.$save();
				$scope.posts.push($scope.post);
				$scope.post = new Post();
			}
			$scope.delete function (post) {
				Post.delete(post);
					.remove($scope.posts, post);
			}
		}

		])