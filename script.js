
angular.module('madLibs', ['ngMessages']) // new module with one dependency
	.controller('GameCtrl', function($scope){
		$scope.person = 'Name';
		$scope.job = 'job title';
		$scope.tedious = 'tedious task';
		$scope.dirty = 'dirty task';
		$scope.celebrity = 'celebrity';
		$scope.useless = 'useless skill';
		$scope.adjective = 'adjective';
		$scope.obnoxious = 'obnoxious celebrity';
		$scope.number = 'big number';
		$scope.gender = 'female';

		
	})