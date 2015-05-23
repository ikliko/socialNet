/**
 * Created by kliko on 23.05.15.
 */
socialNet.controller('loginController', function ($scope, service, $location, notifyService) {
    $scope.login = function (loginData) {
        if(loginData.rememberMe) {
            service.rememberUser(loginData);
        }
        service.login(loginData)
            .then(function (serverData) {
                service.setUserInLocalStorage(serverData);
                $location.path('/feed');
                notifyService.showInfo('Login Successful!');
            }, function (error) {
                notifyService.showError('Unsuccessful Login!', error)
            });
    };
});