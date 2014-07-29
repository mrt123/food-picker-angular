define(["./module"], function (controllers) {

    controllers.controller('FoodCtrl', [ '$scope', '$foodData', '$meal', function ($scope, $foodData, $meal) {
        $scope.chosenFood = undefined;

        // create columns for chosen food.
        $scope.nutrients = [
            "protein",
            "complex",
            "sugar",
            "o3",
            "o6",
            "monoUnsaturated",
            "saturated",
            "calories"
        ];

        $scope.$watch('chosenFoodName', function () {
            if ($scope['chosenFoodName']) {
                var food = $foodData.getFoodByName($scope['chosenFoodName']);
                if (food !== null)

                {
                    $scope.chosenFood = food;
                    $meal.addFood(food);
                }
            }
        });
    }]);
});
