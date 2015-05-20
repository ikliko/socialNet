/**
 * Created by kliko on 19.05.15.
 */
'use strict';
socialNet.factory('request', function($http, $q){
    function requester (method, url, headers, data) {
        var defer = $q.defer();
        $http({
            method: method,
            url: url,
            headers: headers,
            data: data
        }).success(function (data, status, headers, config) {
            defer.resolve(data, status, headers, config)
        }).error(function (data, status, headers, config) {
            defer.reject(data, status, headers, config);
        });

        return defer;
    }

    return {
        makeRequest:requester
    }
});