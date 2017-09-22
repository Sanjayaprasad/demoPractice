myApp.controller('stdController', function($scope, $http){
	console.log("Hello From Controller");

	$scope.addStudent = function(){
		$http.post('/api/students/', $scope.std).then(function(response){
			$scope.students=response.data;
			console.log($scope.students)
			window.location.href='/';
		});
	}

	$scope.getStudents = function(){
		$http.get('/api/students').then(function(response){
			$scope.students=response.data;
		});
	};
});