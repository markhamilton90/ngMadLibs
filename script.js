
angular.module('madLibs', ['ngAnimate']) 
	.controller('GameCtrl', function($scope){

		$scope.madLibs = {
			person: "",
			job: "",
			tedious: "",
			dirty: "",
			celebrity: "",
			useless: "",
			adjective: "",
			obnoxious: "",
			number: ""
		}

		$scope.showView = true;

		$scope.submit = function() {
			if ($scope.myForm.$valid) {
				$scope.showView = false;
			}
		}

		$scope.reset = function() {
			if ($scope.showView == false) {
				$scope.showView = true;
				for (var input in $scope.madLibs) {
					$scope.madLibs[input] = "";
				}	
			}
		}
	})