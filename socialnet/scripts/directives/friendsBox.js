/**
 * Created by kliko on 24.05.15.
 */
'use strict';
socialNet.directive('friendsBox', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/boxes/friends-box.html',
        replace: true
    }
});