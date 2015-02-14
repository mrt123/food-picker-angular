define([
    "./_directives-ng-module",
    "select2"
],
    function (directives, select2) {

        directives.directive('mySelect2', function () {

            return {
                // isolate scope
                scope: {
                    resetSelection: '@resetSelection'
                },
                // scope is only available in link Function
                link: function ($scope, element, attr) {

                    /**
                     * clears selection and returns to default placeholder!
                     */
                    var clearSelection = function() {
                        if($scope.resetSelection === 'true') {
                                    element.select2('val', 'All');
                        }
                    };

                    // initialize drop down and select2 functionality on data change!
                    $scope.$watch('foodData', function () {
                        element.select2();
                        element.on('change',
                            function() {
                                // do nothing for now!
                            }
                        );
                    });
                }
            };
        });
    }
);