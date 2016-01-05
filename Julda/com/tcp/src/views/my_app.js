angular.module('myApp', []).controller('myController', function($scope, $http) {
	$http.get('/user/profile?id=test').then(function(res) {
//		var obj = JSON.parse
		$scope.user = res.data.memlist[0].mem_id;
	});
});