define(
    [
        "app"
    ],
    function (app) {

        return app.config(['$routeProvider', function ($routeProvider) {

            $routeProvider.when('/meal', {
                templateUrl: 'templates/meal.html',
                controller: 'MealCtrl'
            });

            $routeProvider.otherwise({
                redirectTo: '/meal'
            });
        }]);
    }
);