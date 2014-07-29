define([
    "./module"
],
    function (services) {

        services.factory('$foodData', ['$http', '$q', function ($http, $q) {


            var service = {
                data: [],

                fetch: function () {
                    var deferred = $q.defer();
                    $http.get('food_data/food_data.json').success(function (data) {
                        service.data = data;
                        deferred.resolve(data);
                    });
                    return deferred.promise;
                },

                getFoodByName: function (name) {
                    var matchedFood = null;
                    service.data.some(function (food) {
                        var match = (food.name.toLowerCase() === name.toLowerCase());
                        if (match) {
                            matchedFood = food;
                            return match;
                        }
                    });
                    return matchedFood;
                }
            };

            return service;

        }]);
    }
);