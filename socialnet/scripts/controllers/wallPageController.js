/**
 * Created by kliko on 16.05.15.
 */
socialNet.controller('wallPageController', function ($scope, $routeParams, $location, service) {
    var currentUsername = $routeParams.username;
    if(service.getUsername() == currentUsername) {
        $location.path('/feed');
    }

    service.getUserFullData(currentUsername)
        .then(function (fullUserData) {
            console.log(fullUserData);
            setUserData(fullUserData);
        }, function (error) {
            console.log(error);
        });

    function setUserData(userData) {
        var userProfile = {
            gender: getGender(),
            genderType: getGenderType(getGender()),
            fullName: userData.name,
            coverImage: userData.coverImageData,
            profileImage: userData.profileImageData
        };

        service.getAllFriends()
            .then(function (data) {
                $scope.friendsCount = data.length;
                var allFriends = data;
                $scope.rows = {
                    top: [],
                    bottom: []
                };

                var i = 0,
                    lnt = allFriends.length;
                for(; i < lnt; i++) {
                    if(i < 3) {
                        $scope.rows.top.push(allFriends[i]);
                    } else {
                        $scope.rows.bottom.push(allFriends[i]);
                    }

                    if(i == 5) {
                        break;
                    }
                }

            }, function (error) {
                console.log(error);
            });

        function getGender () {
            var gender = '';
            switch(userData.gender) {
                case 1: gender = 'male';
                    break;
                case 2: gender = 'female';
                    break;
                default: gender = 'other';
                    break;
            }

            return gender;
        }

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

        $scope.profile = userProfile;
    }

    $scope.submitPost = function (postContent) {
        var post = {
            author: {
                name: 'name'
            },
            postContent: postContent
        };
        $scope.posts.push(post);
    };

    $scope.posts = [];
});