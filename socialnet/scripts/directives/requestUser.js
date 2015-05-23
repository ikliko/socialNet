/**
 * Created by kliko on 22.05.15.
 */

'use strict';

socialNet.directive('requestUser', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/boxes/request-user.html',
        replace: true
    }
});