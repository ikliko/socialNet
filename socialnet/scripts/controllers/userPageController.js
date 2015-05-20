/**
 * Created by kliko on 16.05.15.
 */
socialNet.controller('userPageController', function ($scope, $routeParams, $location) {
    if(sessionStorage['sessionToken']) {
        $location.path('/AccesDenied')
    }
    $scope.username = $routeParams.username;
    $scope.fullName = 'Kliko Atanasov';
    $scope.work = 'One Creative as Backend';
    $scope.study = 'Software University';
});