
myApp.factory('dataservice',
    ["$http",
        function ($http) {

            var getPersons = function () {
                return $http.get("http://localhost:3928/api/person");

            }

            var updatePerson = function (person) {
                return $http.post("http://localhost:3928/api/person", person);
            };

            return {
                updatePerson: updatePerson,
                getPersons: getPersons
            };
        }]);