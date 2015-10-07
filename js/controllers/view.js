app.controller('viewCtrl', ['$scope','twitterdata', function ($scope, twitterdata) {

	console.log("viewCtrl working!"); 
	$scope.title = "Nombre Twitter";
	$scope.dataa = twitterdata;
	
	console.log($scope.dataa);
	console.log(twitterdata);

}]);