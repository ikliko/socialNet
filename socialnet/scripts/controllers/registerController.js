/**
 * Created by kliko on 19.05.15.
 */
socialNet.controller('registerController', function ($scope) {
    $scope.register = function (user, registerForm) {
        console.log(registerForm);
        if(registerForm.$valid) {
            console.log(user);
        } else {

        }
    }
});