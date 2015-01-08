define([
    "./_services-ng-module"
],
    function (services) {

        services.factory('$food', [ function () {

            return {
                getGlycemicLoad: function (food) {
                    if (typeof food['gi'] === 'number') {
                        return food['gl'] = food['gi'] * food['amount'];
                    } else {
                        return "";
                    }
                }
            };
        }]);
    }
);