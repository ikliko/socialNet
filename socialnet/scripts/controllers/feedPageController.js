/**
 * Created by kliko on 20.05.15.
 */
socialNet.controller('feedPageController', function ($scope, $routeParams, $location) {
    $scope.feedActive = 'active';
    if(sessionStorage['sessionToken']) {
        $location.path('/AccesDenied')
    }
    $scope.username = $routeParams.username || 'kliko';
    $scope.fullName = 'Kliko Atanasov';
    $scope.work = 'One Creative as Backend';
    $scope.study = 'Software University';

    $scope.postComment = function () {
        console.log('good job');
    };
});