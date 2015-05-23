/**
 * Created by kliko on 20.05.15.
 */
'use strict';
socialNet.directive('post', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/boxes/post.html',
        replace: true
    }
});