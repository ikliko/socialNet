/**
 * Created by kliko on 16.05.15.
 */
socialNet.controller('wallPageController', function ($scope, $routeParams, $location) {
    $scope.wallActive = 'active';
    if(sessionStorage['sessionToken']) {
        $location.path('/AccesDenied')
    }
    $scope.username = $routeParams.username || 'kliko';
    $scope.fullName = 'Kliko Atanasov';
    $scope.work = 'One Creative as Backend';
    $scope.study = 'Software University';
});