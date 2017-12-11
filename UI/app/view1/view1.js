'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$rootScope', '$location','dataservice', function($scope, $rootScope, $location, dataservice) {
	if (!$rootScope.persons)
	 {
		dataservice.getPersons().then(function (results) {
			$rootScope.persons = results.data;
		},
		function (error) {
			alert(error);
		});
	}
	
	$scope.showUpdatePersonForm = function (person) {
		$rootScope.person = person;
		$location.path('/view2/' + person.Id);
	};
}]);