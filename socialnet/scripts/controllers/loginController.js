/**
 * Created by kliko on 23.05.15.
 */
socialNet.controller('loginController', function ($scope, service, notifyService) {
    $scope.login = function () {

        service.login()
    };
});