define(
    [
        "./module"
    ],
    function (filters) {

        filters.filter('proximateNutrientValue', function () {
            return function (amount) {
                if (typeof amount === 'number') {
                    var rounded;
                    if (amount <= 10) {
                        rounded = Math.round(amount * 100) / 100;  // round up to 2 decimal places!
                    }
                    else if (amount <= 100) {
                        rounded = Math.round(amount * 10) / 10;  // round up to 1 decimal places!
                    }
                    else if (100 < amount) {
                        rounded = Math.round(amount);  // no decimal places!
                    }
                }
                else {
                    rounded = "";
                }

                return rounded;
            };
        });
    }
);