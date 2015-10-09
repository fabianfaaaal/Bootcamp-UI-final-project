app.controller('locatCtrl', ['$scope', function ($scope) {

$scope.position = {};

/* GEOLOCATION */
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position){
			$scope.$apply(function(){
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