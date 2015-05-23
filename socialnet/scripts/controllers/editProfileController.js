/**
 * Created by kliko on 20.05.15.
 */
socialNet.controller('editProfileController', function ($scope, $routeParams, $location, service) {
    if(service.isLoggedIn()) {
        $location.path('/AccesDenied')
    }
    $scope.editProfileActive = 'active';
    $scope.isEditPasswordActive = '';
    $scope.infoActive = 'active';
    $scope.fullNameInfo = true;
    $scope.genderInfo = true;
    $scope.emailInfo = true;

    //$scope.username = $routeParams.username || 'kliko';
    //$scope.fullName = 'Kliko Atanasov';
    //$scope.gender = 'male';
    //$scope.genderType = getGenderType($scope.gender);
    //$scope.email = 'email@asadas.com';

    $scope.showEdit = function (elm) {
        $scope[elm + 'Info'] = !$scope[elm + 'Info'];
    };

    $scope.edit = function (elm, newValue) {
        if(elm != 'gender') {
            $scope[elm] = newValue;
            $scope.showEdit(elm);
        } else {
            $scope[elm] = newValue == 1? 'male' : newValue == 2? 'female' : 'other';
            $scope.genderType = getGenderType($scope.gender);
        }
    };

    $scope.changeTab = function () {
        $location.path('/edit/password');
        $scope.isEditPasswordActive = $scope.editProfileActive;
        $scope.editProfileActive = '';
    };

    function getGenderType (gender) {
        var genderType = 'fa fa-';
        switch(gender) {
            case 'male': genderType += 'mars';
                break;
            case 'female': genderType += 'venus';
                break;
            default: genderType += 'circle-thin';
                break;
        }
        return genderType;
    }
    
    $scope.changeProfile = function (profilePic) {

        console.log('uploaded');
        console.log(profilePic);
        console.log('hi');
    }
});