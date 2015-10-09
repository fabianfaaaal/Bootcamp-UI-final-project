app.controller('locatCtrl', ['$scope', 'twitterdata', function ($scope, Factory) {

$scope.locationid = 0;
$scope.position = {};

/* GEOLOCATION */
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position){
			$scope.$apply(function(){

				var latitud = position.coords.latitude;
				var longitud = position.coords.longitude;

				Factory.getGeo(latitud, longitud, function(resp){

					//console.log(resp.data[0].woeid);

					$scope.locationid = resp.data[0].woeid;

				});

				$scope.position = position;

				console.log($scope.position);
			});
		});
	}
	else
	{
		console.log("Geolocation is not supported.");
	};

	

}]);