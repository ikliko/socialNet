/**
 * Created by kliko on 17.05.15.
 */
'use strict';

socialNet.directive('logo', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/boxes/logo.html',
        replace: true
    }
});