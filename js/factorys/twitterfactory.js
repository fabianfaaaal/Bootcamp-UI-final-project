app.factory('twitterdata', ['$http',function ($http) {
	
	var get = function(cb){ 

		$http({
			method: 'GET',
			url: "http://localhost:3000/timeline?count=50"

		}).then(function (response){
			cb(response);

		}, function (response){

			console.log("No hay respuesta");

		});

		
	};

	return {

			get: get
		};
}]);