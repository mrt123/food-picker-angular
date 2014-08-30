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
                    foodData: '=data',   // to init drop-down items
                    /**
                     *  -   & binding allows a directive to trigger evaluation of an expression
                     *      in the context of the original scope
                     *  -   call to delete on the isolated scope actually evaluates the expression on owning controller
                     */
                    'publishFood': '&onPublish',
                    'delete': '&onDelete',
                    'resetSelection' : '@'

                },
                // scope is only available in link Function
                link: function ($scope, element, attr) {
                    $scope.chosenFood = {};

                    $scope.$watch('chosenFoodName', function(newFoodName, oldFoodName, $scope) {
                        // oldFood will be null when can't be found in data.
                        if ($scope['chosenFoodName']) {

                            // define onPublish expression for this directive.
                            var foodUpdate = getFoodUpdate(newFoodName, oldFoodName, $foodData, $food);
                            $scope.publishFood({'foodUpdate': foodUpdate});

                            // populate columns
                            $scope.chosenFood = foodUpdate.newFood;
                        }
                    });
                },
                template: function () {
                    return template;
                }
            };

            function getFoodUpdate(newFoodName, oldFoodName, foodDataService, foodService) {
                // food data in foodDataService is loaded in the controller.
                var oldFood = foodDataService.getFoodByName(oldFoodName);
                var newFood = foodDataService.getFoodByName(newFoodName);
                newFood.gl = foodService.getGlycemicLoad(newFood); // gl property will not be provided by $foodData.
                return {'newFood': newFood, 'oldFood': oldFood };
            }
        }]);
    }
);