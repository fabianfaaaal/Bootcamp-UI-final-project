app.controller('viewCtrl', ['$scope','twitterdata', function ($scope, Factory) {

	console.log("viewCtrl working!"); 
	$scope.title = "Nombre Twitter";
	
	var callback = function(data) {
		console.log("ajax done");
		//console.log(data);

		var tweets = [] ;

		tweets = data;
		

		//if(tweets.length) {

			for (var i = 0; i < tweets.length; i++) {

				console.log("Nombre nº " + i + " = " + tweets.data[i].user.screen_name);
			};

			
		//};
		
		console.log(tweets);
		
		return tweets;
	};

	Factory.get(callback);

	

}]);