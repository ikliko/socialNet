/**
 * Created by kliko on 16.05.15.
 */
socialNet.controller('wallPageController', function ($scope, $routeParams, $location, service) {
    $scope.wallActive = 'active';
    if(!service.isLoggedIn()) {
        $location.path('/AccesDenied')
    }

    $scope.submitPost = function (postContent) {
        var post = {
            author: {
                name: 'goshito'
            },
            postContent: postContent
        };

        $scope.posts.push(post);
    };

    $scope.posts = [];
    //$scope.username = $routeParams.username || 'kliko';
    //$scope.fullName = 'Kliko Atanasov';
    //$scope.work = 'One Creative as Backend';
    //$scope.study = 'Software University';
    //$scope.image = 'https://scontent-fra.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/10001372_1381684452110308_827010543_n.jpg?oh=55ac7cf70148bcf314ec60c246822e61&oe=55C495F0';
});