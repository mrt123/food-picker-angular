require.config({
    paths: {
        'text': '../bower_components/requirejs-text/text',
        'less': '../bower_components/less.js/dist/less-1.3.3.min',
        'jquery': '../bower_components/jquery/dist/jquery',
        'angular': '../bower_components/angular/angular',
        'angular-route': '../bower_components/angular-route/angular-route',
        'select2': '../bower_components/select2/select2',
        'angular-ui-select2': '../bower_components/angular-ui-select2/src/select2'
    },
    shim: {
        'jquery': {
            exports: 'jquery'
        },
        'select2': {
            exports: 'select2',
            deps: ['jquery']
        },
        'angular': {
            exports: 'angular',
            deps: ['jquery']
        },
        'angular-route': {
            exports: 'angular-route',
            deps: ['angular']
        },
        'angular-ui-select2' : {
            exports: 'angular-ui-select2',
            deps: ['select2', 'angular']
        }
    },
    deps: [
        'less'
    ]
});

require(
    [
        "angular",
        "app",
        "routes"
    ],
    function(angular, app, routes){


        app.config(function ($logProvider) {
            $logProvider.debugEnabled(true);
        });

        // bootstrap should be done when all modules are loaded ;-)
        angular.element(document).ready(function () {
            angular.bootstrap(document, ['app']);
        });
    }
);
