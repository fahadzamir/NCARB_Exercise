
var myApp = angular.module('myApp', ["ngRoute"]);

myApp.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "app/test.html",
            controller: "HomeController"
        })
        .when("/view1/:id", {
            templateUrl: "app/view1/view1.html",
            controller: "View1Ctrl"
        })
        .otherwise({
            redirectTo: "/home"
        });
});

myApp.controller("HomeController",
    function ($scope, $location, DataService) {

        if (!$scope.persons)
         {
            DataService.getPersons().then(function (results) {
                $scope.persons = results.data;
            },
            function (error) {
                alert(error);
            });
        }
        $scope.showUpdatePersonForm = function (id) {
            $location.path('/view1/' + id);
        };

        $scope.savePerson = function () {
            DataService.updatePerson($scope.persons[0]).then(function (results) {
                $scope.persons = results.data;
            },
            function (error) {
                alert('error saving data');
                alert(error);
            });
        }

    });

