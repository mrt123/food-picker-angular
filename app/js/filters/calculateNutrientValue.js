define(
    [
        "./_filters-ng-module"
    ],
    function (filters) {

        filters.filter('calculateNutrientValue', function () {
            return function (nutrientName, food) {

                var amount = food['amount'];
                var nutrientValue = food[nutrientName];

                if (typeof nutrientValue === 'number') {

                    if (nutrientName === "gi") {
                        return nutrientValue;
                    }
                    else {
                        return nutrientValue * amount / 100;
                    }
                }
                else {
                    return "";
                }
            };
        });
    }
);