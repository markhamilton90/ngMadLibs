
angular.module('madLibs', []) 
	.controller('GameCtrl', function($scope){
		$scope.person;
		$scope.job;
		$scope.tedious;
		$scope.dirty;
		$scope.celebrity;
		$scope.useless;
		$scope.adjective;
		$scope.obnoxious;
		$scope.number;
		$scope.showView = true;

		$scope.submit = function() {
			if ($scope.myForm.$valid) {
				$scope.showView = false;
				console.log($scope.showView);
			}
		}

		$scope.reset = function() {
			if ($scope.showView == false) {
				$scope.showView = true;
				console.log($scope.showView);
			}
			$scope.person = "";
			$scope.job = "";
			$scope.tedious = "";
			$scope.dirty = "";
			$scope.celebrity = "";
			$scope.useless = "";
			$scope.adjective = "";
			$scope.obnoxious = "";
			$scope.number = "";
		}
	})