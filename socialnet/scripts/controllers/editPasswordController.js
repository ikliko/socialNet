/**
 * Created by kliko on 21.05.15.
 */
socialNet.controller('editPasswordController', function ($scope, $routeParams, $location, service) {
    if(!service.isLoggedIn()) {
        $location.path('/AccesDenied')
    }
    $scope.isEditPasswordActive = 'active';
    $scope.infoActive = 'active';
    $scope.expandPass = true;
    $scope.workInfo = true;
    $scope.studyInfo = true;
    $scope.fullNameInfo = true;

    //$scope.username = $routeParams.username || 'kliko';
    //$scope.fullName = 'Kliko Atanasov';
    //$scope.work = 'One Creative as Backend';
    //$scope.study = 'Software University';
});