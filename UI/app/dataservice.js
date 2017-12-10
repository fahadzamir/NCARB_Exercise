
myApp.factory('dataservice',
    ["$http",
        function ($http) {

            var getPersons = function () {
                return $http.get("http://localhost:3928/api/personapi");

            }

            var updatePerson = function (person) {
                return $http.post("http://localhost:3928/api/personapi", person);
            };

            return {
                updatePerson: updatePerson,
                getPersons: getPersons
            };
        }]);