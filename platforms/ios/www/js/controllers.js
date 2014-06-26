(function () {
    console.log("controllers::started");

    var controllers = angular.module('app.controllers', [ ]);

    controllers.controller('AppController', function () {
    });

    controllers.controller('HomeController', function () {
    });

    controllers.controller('ServiceAlertsController', function ($scope, $http, $timeout) {
        var _url = 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://status.zen.co.uk/rss/broadband-faults-rss.ashx&callback=JSON_CALLBACK';

        $scope.getAlerts = function () {
            var deferred = $http
                .jsonp(_url)
                .success(function (data) {
                    $scope.alerts = data.responseData.feed.entries;

                    // TODO: move to 'finally'.
                    $scope.$broadcast('scroll.refreshComplete');
                })
                .error(function () {
                    console.error("ERROR");

                    // TODO: move to 'finally'.
                    $scope.$broadcast('scroll.refreshComplete');
                });

            return deferred.promise;
        };

        $scope.refresh = function () {
            $scope.getAlerts();
        };

        $timeout($scope.getAlerts, 0);
    });

    var diagnosticsController = function ($scope, $timeout) {
        $scope.refresh = function () {
            $timeout(function () {
                $scope.$broadcast('scroll.refreshComplete');
            }, 3000);
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
