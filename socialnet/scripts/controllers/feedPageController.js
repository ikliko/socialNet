/**
 * Created by kliko on 20.05.15.
 */
socialNet.controller('feedPageController', function ($scope, $location, service) {
    $scope.feedActive = 'active';
    $scope.gender = getGender();

    $scope.genderType = getGenderType($scope.gender);

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

    (function () {
        service.getFeed({startPostId: '', pageSize:'5'})
            .then(function (feedData) {
                console.log(feedData);
                $scope.posts = feedData;
            }, function (error) {
                console.log(error);
            });
    }());

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

    $scope.likePost = function (id) {
        service.likePost(id)
            .then(function (data) {
                console.log(data);
                service.getPost(id)
                    .then(function (data) {
                        console.log(data);
                    }, function (error) {
                        console.log(error);
                    })
            }, function (error) {
                console.log(error);
            });
    };

    $scope.unlikePost = function (id) {
        service.unlikePost(id)
            .then(function (data) {
                console.log(data);
            }, function (error) {
                console.log(error);
            });
    };
});