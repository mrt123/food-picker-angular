define([
    "./module"
],
    function (services) {

        services.factory('$meal', [ function () {

            var service = {
                foods: [],
                nutrientSum: {},

                addFood: function (food) {
                    service.foods.push(food);
                    // should we broadcast foodUpdate?
                },

                /**
                 *
                 * @param nutrientName
                 * @returns {number} number representing sums of required nutrient across all foods in this meal.
                 */
                calculateSum: function (nutrientName) {
                    var sum = 0;
                    // for all foods (except first - first food in foodList is always empty)
                    for (var i = 1; i < service.foods.length; i++) {
                        var food = service.foods[i];
                        if (food['amount'] !== undefined) {
                            sum += food[nutrientName] * food['amount'] / 100;
                        }
                    }
                    service.nutrientSum[nutrientName] = sum;
                    return sum;
                },

                /**
                 *
                 * @param nutrients object containing low level nutrients as keys
                 * @returns {*} object containing low level nutrients as keys with values representing sums of all foods
                 *              in this meal.
                 */
                calculateAllSums: function (nutrients) {
                    for (var nutrient in nutrients) {
                        service.nutrientSum[nutrient] = this.calculateSum(nutrient);
                    }

                    if ('complex' in nutrients && 'sugar' in nutrients) {
                        service.nutrientSum['carbs'] = service.nutrientSum['complex'] + service.nutrientSum['sugar'];
                    }

                    if ('o3' in nutrients && 'o6' in nutrients
                        && 'monoUnsaturated' in nutrients && 'saturated' in nutrients) {

                        service.nutrientSum['fat'] = service.nutrientSum['o3'] + service.nutrientSum['o6'] +
                            service.nutrientSum['monoUnsaturated'] + service.nutrientSum['saturated'];
                    }
                    return service.nutrientSum;
                }
            };
            return service;
        }]);
    }
);