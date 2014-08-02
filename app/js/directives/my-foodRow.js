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
                    $scope.chosenFood = {};

                    // chosenFoodName model comes from template
                    $scope.$watch('chosenFoodName', function () {

                        if ($scope['chosenFoodName']) {
                            var food = $foodData.getFoodByName(this.last);
                            food.gl = $food.getGlycemicLoad(food); // gl property will not be provided by $foodData.

                            if (food !== null)
                            {
                                $scope.chosenFood = food;
                                $meal.addFood(food);
                            }
                        }
                    });
                },
                template: function() {

                    return template;
                }
            };
        }]);
    }
);