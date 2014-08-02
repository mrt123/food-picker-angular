define([
    "./module",
    "text!./my-foodRow.html"
],
    function (directives, template) {

        directives.directive('myFoodRow', [ '$meal', '$food', '$foodData', function ($meal, $food, $foodData) {

            return {
                // isolate scope
                scope: {
                    nutrients: '=columns',  // init columns for chosen food
                    foodData: '=data'   // init drop-down items
                },
                // scope is only available in link Function
                link: function ($scope, element, attr) {
                    var initialFood = {};
                    $scope.chosenFood = initialFood;

                    // chosenFoodName model comes from template
                    $scope.$watch('chosenFoodName', function () {

                        if ($scope['chosenFoodName']) {
                            var food = $foodData.getFoodByName(this.last);
                            food.gl = $food.getGlycemicLoad(food); // gl property will not be provided by $foodData.

                            if (food !== null) {

                                // remove food if previously added
                                if ($scope.chosenFood !== initialFood) {
                                    $meal.removeFood($scope.chosenFood);
                                }
                                $meal.addFood(food);
                                $scope.chosenFood = food;
                            }
                        }
                    });
                },
                template: function () {
                    return template;
                }
            };
        }]);
    }
);