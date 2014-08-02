define([
    "./module",
    "text!./my-foodRow.html"
],
    function (directives, template) {
        // TODO: remove unused template module.

        directives.directive('myFoodRow', [ '$meal', '$foodData', function ($meal, $foodData) {

            return {
                // isolate scope
                scope: {
                    nutrients: '=columns',  // init columns for chosen food
                    foodData: '=data'   // init drop-down items
                },
                // scope is only available in link Functions
                link: function ($scope, element, attr) {
                    $scope.chosenFood = {};

                    // chosenFoodName model comes from template
                    $scope.$watch('chosenFoodName', function () {

                        if ($scope['chosenFoodName']) {
                            var food = $foodData.getFoodByName(this.last);
                            food.gl = null; // gl property will not be provided by $foodData.
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