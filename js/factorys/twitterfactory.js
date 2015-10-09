app.factory('twitterdata', ['$http',function ($http) {
	
	var get = function(cb){  //cb = CallBack

		$http({
			method: 'GET',
			url: "http://localhost:3000/timeline?count=50"

		}).then(function (response) {
			cb(response);

		}, function (response) {

			console.log("No hay respuesta de timeline");

		});

		
	};

	var getGeo = function(lat, long, cb) {  //Con esta funcion configro la url a traves de los parametros lat y long, y obtengo mi id

		$http({
			method: 'GET',
			url: "http://localhost:3000/myplace?lat="+lat+"&long="+long

		}).then(function (response) {
			cb(response);

		}, function (response) {

			console.log("No hay respuesta de myplace");

		});

		
	};

	var getTrends = function(id, cb) {  //Con esta funcion configuro la url a traves del parametro id, y asi obtengo los trends 
		console.log("Factory trends "+id);

		$http({
			method: 'GET',
			url: "http://localhost:3000/trends?id="+id

		}).then(function (response) {
			cb(response);

		}, function (response) {

			console.log("No hay respuesta de trends");

		});


	};


	return {

		get: get,
		getGeo: getGeo,
		getTrends: getTrends 
	};
}]);