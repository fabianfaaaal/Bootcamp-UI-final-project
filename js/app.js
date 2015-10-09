var app = angular.module("MyTwitterApp",['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.
	when("/",{
		controller: "viewCtrl",
		templateUrl: "views/timeline.html"
	}).
	when("/tweet_details/:id",{
		controller: "detailCtrl",
		templateUrl: "views/tweet_details.html"
	}).
	when("/trends/:woeid",{
		controller: "trendsCtrl",
		templateUrl: "views/trends.html"
	})

	.otherwise({

		redirectTo: "/"

	});

});