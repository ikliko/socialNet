/**
 * Created by kliko on 20.05.15.
 */
socialNet.controller('editProfileController', function ($scope, $routeParams, $location) {
    if(sessionStorage['sessionToken']) {
        $location.path('/AccesDenied')
    }
    $scope.editProfileActive = 'active';
    $scope.isEditPasswordActive = '';
    $scope.infoActive = 'active';
    $scope.workInfo = true;
    $scope.studyInfo = true;
    $scope.fullNameInfo = true;

    $scope.username = $routeParams.username || 'kliko';
    $scope.fullName = 'Kliko Atanasov';
    $scope.work = 'One Creative as Backend';
    $scope.study = 'Software University';
    
    $scope.showEdit = function (elm) {
        $scope[elm + 'Info'] = !$scope[elm + 'Info'];
    };

    $scope.edit = function (elm, newName) {
        $scope[elm] = newName;
        $scope.showEdit(elm);
    };

    $scope.changeTab = function () {
        $location.path('/edit/password');
        $scope.isEditPasswordActive = $scope.editProfileActive;
        $scope.editProfileActive = '';
    };
});