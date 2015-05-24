/**
 * Created by kliko on 19.05.15.
 */
socialNet.controller('registerController', function ($scope, service, notifyService, $location) {
    $scope.register = function (user, registerForm) {
        if(registerForm.$valid && (user.password == user.confirmPassword)) {
            var registerData = {
                username: user.username,
                password: user.password,
                confirmPassword: user.confirmPassword,
                name: user.fullName,
                email: user.email
            };
            service.register(registerData)
                .then(function (data) {
                    service.setUserInLocalStorage(data);
                    service.addFullDataInStorage(registerData);
                    $location.path('/feed');
                    notifyService.showInfo('Registration Successful!');
                }, function (error) {
                    notifyService.showError('Unsuccessful Registration!', error);
                });
        }
    }
});