/**
 * Created by kliko on 24.05.15.
 */
socialNet.controller('logoutController', function ($scope, $location, service) {
    if(!service.isLoggedIn()) {
        $location.path('/AccesDenied')
    }
    service.logout()
        .then(function (data) {
            service.removeUserInLocalStorage();
            $location.path('/');
        }, function (error) {
            console.log(error);
        });
});