app.controller('viewCtrl', ['$scope','twitterdata', function ($scope, twitterdata) {

	console.log("viewCtrl working!");
	$scope.title = "Nombre Twitter";
	&scope.dataa = response.data;

	console.log(twitterdata.timeline());
	console.log($scope.dataa);

}]);