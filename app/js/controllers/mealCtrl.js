define(["./module"], function (controllers) {

    controllers.controller('MealCtrl', ['$scope', '$foodData', '$meal', '$food', function ($scope, $foodData, $meal, $food) {

        // init foodData scope. TODO: consider more suitable place for loading data.
        $foodData.fetch().then(function (data) {
            $scope.foodData = data;  // used by options for food selection.
        });

        // separate foods in service from foods that are presented!
        $scope.mealFoods = $meal.foods;   // to track meal summary!
        $scope.presentedFoods = [{}];

        // TODO: move nutrient list to meal service? or have meal own default nutrients?
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

        // used by on-delete!
        $scope.removeFoodAtIndex = function (index) {
            $meal.removeAtIndex(index);
            $scope.presentedFoods.splice(index, 1);
        };

        $scope.amendMeal = function (foodUpdate) {

            var newFood = foodUpdate.newFood;
            var oldFood = foodUpdate.oldFood;

            if (newFood !== null) {

                // when choosing consecutively in the same food row!
                if (oldFood !== null) {

                    $meal.removeFood(oldFood);
                    // food row remains untouched.
                }
                else {
                    // ads new empty food row!
                    $scope.presentedFoods.push({});
                }
                $meal.addFood(newFood);
            }
        };

        /**
         * watch over mealFoods to generate
         * last argument: 'true', ensures deep equality is checked!
         */
        $scope.$watch('mealFoods', function (newValue, oldValue) {
            $scope.summary = $meal.calculateAllSums($scope.summary);
        }, true);
    }]);
});
