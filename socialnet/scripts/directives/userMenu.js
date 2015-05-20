/**
 * Created by kliko on 17.05.15.
 */
'use strict';

socialNet.directive('userMenu', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/boxes/user-menu.html',
        replace: true
    }
});