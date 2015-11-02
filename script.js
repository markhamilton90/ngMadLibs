
angular.module('madLibs', []) 
	.controller('GameCtrl', function($scope){
		$scope.person = 'Name';
		$scope.job = 'job title';
		$scope.tedious = 'tedious task';
		$scope.dirty = 'dirty task';
		$scope.celebrity = 'celebrity';
		$scope.useless = 'useless skill';
		$scope.adjective = 'adjective';
		$scope.obnoxious = 'obnoxious celebrity';
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