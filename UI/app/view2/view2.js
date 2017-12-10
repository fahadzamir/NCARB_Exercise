'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2/:id', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$window', '$routeParams', 'dataservice', function($scope, $window, $routeParams, dataservice) {
if ($routeParams.id)
            $scope.person = $scope.persons[$routeParams.id];

        $scope.editablePerson = angular.copy($scope.person);

        $scope.submitForm = function () {

            dataservice.updatePerson($scope.editablePerson);

            $scope.person = angular.copy($scope.editablePerson);
            $scope.persons[$routeParams.id] = angular.copy($scope.person);
            $window.history.back();
        };

        $scope.cancelForm = function () {
            $window.history.back();
        };
}]);