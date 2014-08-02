define(["./module"], function (controllers) {

    controllers.controller('MealCtrl', ['$scope', '$foodData', '$meal', function ($scope, $foodData, $meal) {

        // init foodData scope.
        $foodData.fetch().then(function(data){
            $scope.foodData = data;  // used by options for food selection.
        });

        // add first empty food and init foods scope.
        // food list will change not only
        $scope.foods = $meal.addFood({}).foods;

        // init summary scope keys.
        $scope.summary = {
            "protein": null,
            "complex": null,
            "sugar": null,
            "o3": null,
            "o6": null,
            "monoUnsaturated": null,
            "saturated": null,
            "calories": null,
            "gl": null
        };

        // watch over foods which is attached on $meal.foods
        $scope.$watch('foods', function (newValue, oldValue) {

            $scope.summary = $meal.calculateAllSums($scope.summary);
        }, true);
    }]);
});
