define([
    "./module",
    "select2"
],
    function (directives, select2) {

        directives.directive('mySelect2', function () {

            return {
                // scope is only available in link Function
                link: function ($scope, element, attr) {

                    $scope.$watch('foodData', function () {
                        element.select2();
                    });
                }
            };
        });
    }
);