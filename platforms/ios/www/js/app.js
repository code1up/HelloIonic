(function () {
    var app = angular.module('app', [
        'ionic',
        'app.controllers',
        'ngSanitize'
    ]);

    app.run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }

            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    });

    app.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/app.html',
            controller: 'AppController'
        });

        $stateProvider.state('app.home', {
            url: '/home',
            views: {
                'menuContent': {
                    templateUrl: 'templates/home.html',
                    controller: 'HomeController'
                }
            }
        });

        $stateProvider.state('app.serviceAlerts', {
            url: '/serviceAlerts',
            views: {
                'menuContent': {
                    templateUrl: 'templates/serviceAlerts.html',
                    controller: 'ServiceAlertsController'
                }
            }
        });

        $stateProvider.state('app.diagnostics', {
            url: '/diagnostics',
            views: {
                'menuContent': {
                    templateUrl: 'templates/diagnostics.html',
                    controller: 'DiagnosticsController'
                }
            }
        });

        $stateProvider.state('app.callQueues', {
            url: '/callQueues',
            views: {
                'menuContent': {
                    templateUrl: 'templates/callQueues.html',
                    controller: 'CallQueuesController'
                }
            }
        });

        $stateProvider.state('app.settings', {
            url: '/settings',
            views: {
                'menuContent': {
                    templateUrl: 'templates/settings.html',
                    controller: 'SettingsController'
                }
            }
        });

        // This is the fallback state.
        $urlRouterProvider.otherwise('/app/home');
    });

    console.log('app::configured');
}());
