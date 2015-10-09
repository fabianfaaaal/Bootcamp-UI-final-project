app.controller('viewCtrl', ['$scope','twitterdata', 'detailsdata', function ($scope, Factory, Details) {

	console.log("viewCtrl working!"); 
	$scope.title = "Tiemeline";
	$scope.tweets = {};

	/* TIMELINE */ 
	var callback = function(data) {
		
		console.log("ajax done");
		
		$scope.tweets = data.data;

		Details.grabarTweets($scope.tweets); //Le paso la data a factorydetails

		console.log($scope.tweets);
		
		/*if ($scope.tweets.length) {
			
			for (var i = 0; i < $scope.tweets.length; i++) {

			console.log($scope.tweets[i].text);
			};

		};*/

	};


	/* COMMUNICATION WITH TWITTERFACTORY*/ 
	Factory.get(callback);


}]);

app.controller('detailCtrl', ['$scope', '$routeParams','detailsdata', function ($scope, $routeParams, detailsdata) {
	$scope.title = "Tweet details";
	$scope.dTweet = detailsdata.thisTweet($routeParams.id); //asigno en dtweet el objeto con el id especifico

	console.log($scope.dTweet);

	
	//$scope.tweets = $scope.tweets[$routeParams.id];
	

}]);


