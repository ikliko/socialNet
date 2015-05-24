/**
 * Created by kliko on 20.05.15.
 */
socialNet.controller('feedPageController', function ($scope, $location, service) {
    $scope.feedActive = 'active';
    (function () {
        service.getFeed({startPostId: '', pageSize:'5'})
            .then(function (feedData) {
                console.log(feedData);
                $scope.posts = feedData;
            }, function (error) {
                console.log(error);
            });
    }());

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