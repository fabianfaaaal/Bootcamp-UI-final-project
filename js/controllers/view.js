app.controller('viewCtrl', ['$scope','twitterdata', function ($scope, Factory) {

	console.log("viewCtrl working!"); 
	$scope.title = "Tiemeline";
	$scope.tweets = [] ;

	var callback = function(data) {
		console.log("ajax done");
		//console.log(data);

		tweets = data;
		

		if(tweets.data.length) {

			for (var i = 0; i < tweets.data.length; i++) {

				console.log("Nombre nº " + i + " = " + tweets.data[i].user.screen_name);
			};

			
		};
		
		console.log(tweets);

		return tweets;
	};

	Factory.get(callback);



	

}]);