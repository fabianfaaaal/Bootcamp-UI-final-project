app.controller('viewCtrl', ['$scope','twitterdata', function ($scope, Factory) {

	console.log("viewCtrl working!"); 
	$scope.title = "Tiemeline";
	$scope.tweets = {};

	var callback = function(data) {
		
		console.log("ajax done");
		
		$scope.tweets = data.data;
		console.log($scope.tweets);
		console.log()
	};

	Factory.get(callback);


}]);