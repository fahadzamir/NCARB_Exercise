myApp.controller('View1Ctrl',
    function View1Ctrl($scope, $window, $routeParams, DataService) {

        if ($routeParams.id)
            $scope.person = $scope.persons[$routeParams.id];

        $scope.editablePerson = angular.copy($scope.person);

        $scope.submitForm = function () {

            DataService.updatePerson($scope.editablePerson);

            $scope.person = angular.copy($scope.editablePerson);
            $scope.persons[$routeParams.id] = angular.copy($scope.person);
            $window.history.back();
        };

        $scope.cancelForm = function () {
            $window.history.back();
        };

});