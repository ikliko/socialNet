/**
 * Created by kliko on 16.05.15.
 */
socialNet.controller('userController', function ($scope, $routeParams, $location) {
    if($routeParams.username != 'kliko') {
        $location.path('/PageNotFound')
    }
    $scope.username = $routeParams.username;
});