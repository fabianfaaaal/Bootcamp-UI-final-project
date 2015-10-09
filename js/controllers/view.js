app.controller('viewCtrl', ['$scope','twitterdata', 'detailsdata', function ($scope, Factory, Details) {

	console.log("viewCtrl working!"); 
	$scope.title = "Tiemeline";
	$scope.tweets = {};

	/* TIMELINE */ 
	var callback = function(data) {
		
		console.log("ajax done");
		
		$scope.tweets = data.data;

		Details.grabarTweets($scope.tweets); //Le paso la data a factorydetails

	};


	/* COMMUNICATION WITH TWITTERFACTORY*/ 
	Factory.get(callback);


}]);

/* DETAIL CONTROLLER */

app.controller('detailCtrl', ['$scope', '$routeParams','detailsdata', function ($scope, $routeParams, detailsdata) {
	
	$scope.title = "Tweet details";
	$scope.dTweet = detailsdata.thisTweet($routeParams.id); //Asigno en dtweet el objeto con el id especifico

	console.log($scope.dTweet);


}]);

/* TRENDS CONTROLLER */
app.controller('trendsCtrl', ['$scope', '$routeParams', 'twitterdata', function ($scope, $routeParams, Factory) {
	
	$scope.title = "Trends";
	console.log($routeParams.woeid);
	
	$scope.trendId = Factory.getTrends($routeParams.woeid, function(respuesta){

		console.log(respuesta);

	});

	
}]);


