/**
 * Created by kliko on 20.05.15.
 */
socialNet.controller('editProfileController', function ($scope, $routeParams, $location, service, notifyService) {
    $scope.editProfileActive = 'active';
    if(!service.isLoggedIn()) {
        $location.path('/AccesDenied')
    }

    var isFullData = localStorage.fullName;
    if(!isFullData) {
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
        $scope.fullName = localStorage.fullName;
        $scope.username = service.getUsername();
        $scope.profileImage = localStorage.profileImage;
        $scope.coverImage = localStorage.coverImage;
        $scope.email = localStorage.email
    }

    $scope.isEditPasswordActive = '';
    $scope.infoActive = 'active';
    $scope.fullNameInfo = true;
    $scope.genderInfo = true;
    $scope.emailInfo = true;


    $scope.gender = getGender();

    function getGender () {
        var gender = '';
        switch(localStorage.genderType) {
            case '1': gender = 'male';
                break;
            case '2': gender = 'female';
                break;
            default: gender = 'other';
                break;
        }
        localStorage.gender = gender;
        return gender;
    }

    $scope.genderType = getGenderType($scope.gender);


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

    $scope.showEdit = function (elm) {
        $scope[elm + 'Info'] = !$scope[elm + 'Info'];
    };

    $scope.edit = function (elm, newValue) {
        if(elm != 'gender') {
            $scope[elm] = newValue;
            changeData(elm, newValue)
                .then(function (data) {
                    notifyService.showInfo(data.message);
                    localStorage['elm'] = $scope.genderType;
                }, function (error) {
                    notifyService.showError('Edit was unsuccessful! ', error);
                });
        } else {
            changeData(elm, getGender(newValue))
                .then(function (data) {
                    notifyService.showInfo(data.message);
                    var genderNum = newValue.toLowerCase() == 'male'? '1' : newValue.toLowerCase() == 'female'? '2': '3';
                    localStorage['genderType'] = genderNum;
                    $scope.gender = getGender(localStorage['genderType']);
                    console.log(genderNum);
                    console.log($scope.gender);
                    $scope.genderType = getGenderType($scope.gender);
                }, function (error) {
                        notifyService.showError('Usuccessful Edit!', error);
                })
        }
        $scope.showEdit(elm);
    };

    function changeData(field, newValue) {
        var editProfileData = {
            name: localStorage.fullName,
            email: localStorage.email,
            gender: localStorage.gender,
            profileImageData: localStorage.profileImage,
            coverImageData: localStorage.coverImage
        };

        switch(field) {
            case 'fullName':
                editProfileData.name = newValue;
                break;
            case 'email':
                editProfileData.email = newValue;
                break;
            case 'gender':
                editProfileData.gender = newValue;
                break;
            case 'profileImageData':
                editProfileData.profileImageData = newValue;
                break;
            case 'coverImageData':
                editProfileData.coverImageData = newValue;
                break;
        }

        var haveProfilePicture = checkPictureLength(editProfileData.profileImageData);
        var haveCoverPicture = checkPictureLength(editProfileData.coverImageData);

        if(!haveProfilePicture) {
            delete editProfileData.profileImageData;
        }

        if(!haveCoverPicture) {
            delete editProfileData.coverImageData;
        }

        console.log(editProfileData);

        return service.editProfile(editProfileData);
    }

    function checkPictureLength(pic) {
        return pic.length >= 5;
    }

    $scope.changeProfile = function (profilePic) {
        console.log('uploaded');
        console.log(profilePic);
        console.log('hi');
    };

    $scope.changePassTab = function () {
        $location.path('/edit/password');
    }
});