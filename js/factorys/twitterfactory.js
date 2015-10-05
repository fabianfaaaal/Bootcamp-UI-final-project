app.factory('twitterdata', ['$http',function ($http) {
	
	timeline = function(respuesta){ 

		$http({
			method: 'GET',
			url: "http://localhost:3000/timeline?count=50"

		}).then(function succesCallback(response){

			var respuesta = response;
			console.log("Respuesta de Twitter");

		}, function errorCallback(response){

			console.log("No hay respuesta");

		});

		
	};

	return {

			timeline: timeline
		};
}]);