app.controller('viewCtrl', ['$scope','twitterdata', function ($scope, Factory) {

	console.log("viewCtrl working!"); 
	$scope.title = "Tiemeline";
	$scope.tweets = {};

	/* TIMELINE */ 
	var callback = function(data) {
		
		console.log("ajax done");
		
		$scope.tweets = data.data;


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

app.controller('detailCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {

	$scope.title = "Tweet details";
	//$scope.tweets = $scope.tweets[$routeParams.id];
	console.log($scope.tweets[$routeParams.id]);

}]);