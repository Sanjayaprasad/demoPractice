var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function($routeProvider){
	
	$routeProvider
	.when('/',{
		templateUrl : 'views/list.html',
		controller : 'stdController'
	})
	.when('/student',{
		templateUrl : 'views/list.html',
		controller : 'stdController'
	})
	.when('/student/create',{
		templateUrl : 'views/add.html',
		controller : 'stdController'
	})
	.when('/student/:id/edit',{
		templateUrl : 'views/edit.html',
		controller : 'stdController'
	});
});