var app = angular.module('myApp', []);

app.controller('myController', function($scope, $http) {
	$http.get('/user/profile').then(function(res) {
		$scope.user = res.data.memlist[0].mem_id;
	});
}); 