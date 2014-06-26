(function () {
    console.log("controllers::started");

    var controllers = angular.module('app.controllers', [ ]);

    controllers.controller('AppController', function () {
    });

    controllers.controller('HomeController', function () {
    });

    controllers.controller('ServiceAlertsController', function ($scope) {

    });

    var diagnosticsController = function ($scope, $timeout) {
        $scope.items = [
            {
                name: "A"
            },
            {
                name: "C"
            },
            {
                name: "D"
            }
        ];

        $scope.refresh = function () {
            console.log('Refreshing');

            $timeout(function () {
                $scope.items.push({
                    name: "X"
                });

                $scope.$broadcast('scroll.refreshComplete');
            }, 1000);
        };
    };

    controllers.controller('DiagnosticsController', [
        '$scope', '$timeout', diagnosticsController]);

    controllers.controller('CallQueuesController', function () {
    });

    controllers.controller('SettingsController', function () {
    });

    console.log("controllers::completed");
}());
