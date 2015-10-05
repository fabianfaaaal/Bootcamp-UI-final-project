var app = angular.module("MyTwitterApp",['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.
	when("/",{
		controller: "viewCtrl",
		templateUrl: "views/timeline.html"
	})

	.otherwise({
		redirectTo: "/"
	});

});