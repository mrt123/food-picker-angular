define(["./module"], function (controllers) {

    controllers.controller('MealCtrl', ['$scope', '$foodData', '$meal', function ($scope, $foodData, $meal) {

        // init foodData scope.
        $foodData.fetch().then(function(data){
            $scope.foodData = data;  // used by options for food selection.
        });

        // add first empty food and init foodList scope.
        $scope.foodList = $meal.addFood({}).foods;

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

        // watch over foodList which is attached on $meal service.
        $scope.$watch('foodList', function (newValue, oldValue) {

            $scope.summary = $meal.calculateAllSums($scope.summary);

        }, true);
    }]);
});
