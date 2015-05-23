/**
 * Created by kliko on 21.05.15.
 */
socialNet.directive('userProfile', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/boxes/user-profile.html',
        replace: true
    }
});