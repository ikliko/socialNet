/**
 * Created by kliko on 20.05.15.
 */
socialNet.controller('feedPageController', function ($scope, $location, service) {
    $scope.feedActive = 'active';
    if(!service.isLoggedIn()) {
        $location.path('/AccesDenied')
    }

    //$scope.username = $routeParams.username || 'kliko';
    //$scope.fullName = 'Kliko Atanasov';
    //$scope.work = 'One Creative as Backend';
    //$scope.study = 'Software University';
});