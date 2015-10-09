app.factory('detailsdata', [function () {
	
	var currenttweets = [];



	return {

		grabarTweets: function(tweets) {

			currenttweets = tweets;

		},

		thisTweet: function(tweetid) {
			
			if (currenttweets.length) {
				var devolverTweet = {} ;

				 for (var i = 0; i < currenttweets.length; i++) {
				 	
				 	if(currenttweets[i].id == tweetid ){

				 		//i = currenttweets.length;

				 		devolverTweet = currenttweets[i];

				 	};

				 }

		 		return devolverTweet;
			};

			
		},


		sendTweets: function() {

			return currenttweets;

		}

	};

}]);