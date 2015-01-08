define(
    [
        "angular",
        "angular-route",
        "services/_services-loader",
        "directives/_directives-loader",
        "controllers/_controllers-loader",
        "filters/_filters-loader"
    ],
    function (ng) {

        return app = ng.module('app', [
            'ngRoute',
            'app.services',
            'app.directives',
            'app.controllers',
            'app.filters'
        ]);
    }
);