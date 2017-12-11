'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2/:id', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$window', '$routeParams', 'dataservice', function($scope, $window, $routeParams, dataservice) {
        $scope.editablePerson = angular.copy($scope.person);

        $scope.submitForm = function () {

            dataservice.updatePerson($scope.editablePerson);

            $scope.person = angular.copy($scope.editablePerson);
			for(var i in $scope.persons) {
				if($scope.persons[i].Id == $routeParams.id) {
					$scope.persons[i] = angular.copy($scope.person);
				}
			}
			
            $window.history.back();
        };

        $scope.cancelForm = function () {
            $window.history.back();
        };
}]);