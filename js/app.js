var app = angular.module("MyTwitterApp",['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.
		when("/",{
			controller: "AppCtrl",
			templateUrl: "template/timeline.html"
		})
		
		.otherwise({
			redirectTo: "/"
		});

	});