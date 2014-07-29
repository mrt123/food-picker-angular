define(
    [
        "angular",
        "angular-route",
        "services/index",
        "directives/index",
        "controllers/index",
        "filters/nutrientValue"
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