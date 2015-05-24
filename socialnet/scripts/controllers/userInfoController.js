/**
 * Created by kliko on 24.05.15.
 */
socialNet.controller('userInfoController', function ($scope, $location, service) {
    if(!service.isLoggedIn()) {
        $location.path('/AccesDenied')
    }

    var isFullData = localStorage.fullName;
    if(!isFullData) {
        service.getFullUserData()
            .then(function (fullUserData) {
                service.addFullDataInStorage(fullUserData);
                $scope.fullName = localStorage.fullName;
                $scope.username = service.getUsername();
                $scope.profileImage = localStorage.profileImage;
                $scope.coverImage = localStorage.coverImage;
            }, function (error) {
                console.error.log(error);
            });
    } else {
        $scope.fullName = localStorage.fullName;
        $scope.username = service.getUsername();
        $scope.profileImage = localStorage.profileImage;
        $scope.coverImage = localStorage.coverImage;
    }

    service.getReuqests()
        .then(function (data) {
            $scope.requestsCount = data.length;
        }, function (error) {
            console.log(error);
        });
});