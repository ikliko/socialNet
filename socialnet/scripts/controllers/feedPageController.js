/**
 * Created by kliko on 20.05.15.
 */
socialNet.controller('feedPageController', function ($scope, $location, service) {
    $scope.feedActive = 'active';
    if(!service.isLoggedIn()) {
        $location.path('/AccesDenied')
    }

    var isFullData = localStorage.fullName;
    if(!isFullData) {
        console.log('no full name');
        service.getFullUserData(service.getUsername())
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
        console.log('fullName');
        $scope.fullName = localStorage.fullName;
        $scope.username = service.getUsername();
        $scope.profileImage = localStorage.profileImage;
        $scope.coverImage = localStorage.coverPicture;
    }
});