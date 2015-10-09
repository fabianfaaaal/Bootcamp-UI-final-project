var app = angular.module("MyTwitterApp",['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.
	when("/",{
		controller: "viewCtrl",
		templateUrl: "views/timeline.html"
	}).
	when("/tweet_details/tweet.data:id",{
		controller: "detailCtrl",
		templateUrl: "views/tweet_details.html"
	}).
	when("/trends",{
		controller: "trendsCtrl",
		templateUrl: "views/trends.html"
	})

	.otherwise({

		redirectTo: "/"

	});

});