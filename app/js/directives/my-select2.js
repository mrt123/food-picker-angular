define([
    "./module",
    "select2",
    "text!./my-select2.html"
],
    function (directives, select2, template) {
        // TODO: remove unused template module.

        directives.directive('mySelect2', function () {

            return {
                // scope is only available in link Functions
                link: function ($scope, element, attr) {

                    $scope.$watch('foodData', function () {
                        element.select2();
                    });
                }
            };
        });
    }
);