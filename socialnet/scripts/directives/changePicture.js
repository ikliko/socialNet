/**
 * Created by kliko on 23.05.15.
 */
'use strict';

socialNet.directive('changePicture', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/boxes/change-picture.html',
        replace: true
    }
});