/**
 * Created by kliko on 19.05.15.
 */
'use strict';
socialNet.factory('service', function($http, $q, baseUrl){
    var service = {};
    var serviceUrl = baseUrl + '/users';

    function makeRequest (method, url, headers, data) {
        var defer = $q.defer();
        $http({
            method: method,
            url: url,
            headers: headers,
            data: data
        }).success(function (data, status, headers, config) {
            defer.resolve(data);
        }).error(function (data, status, headers, config) {
            defer.reject(data);
        });

        return defer.promise;
    }
    
    service.login = function (loginData) {
        return makeRequest('POST', serviceUrl + '/login', null, loginData);
    };
    
    service.register = function (registerData) {
        return makeRequest('POST', serviceUrl + '/Register', null, registerData);
    };

    service.getUserProfile = function () {
        return makeRequest('GET', serviceUrl + '/Profile', this.getHeaders());
    };

    service.editProfile = function (editUserData) {
        return makeRequest('PUT', serviceUrl + '/Profile', this.getHeaders(), editUserData);
    };

    service.editPassword = function (changePassData) {
        return makeRequest('PUT', serviceUrl + '/ChangePassword', this.getHeaders(), changePassData);
    };

    service.getUsername = function () {
        return localStorage['username'];
    };

    service.getFullUserData = function () {
        return {
            username: this.getUsername(),
            fullName: localStorage.fullName
        }
    };

    service.getHeaders = function() {
        return {
            Authorization: "Bearer " + localStorage['accessToken']
        };
    };

    service.isLoggedIn = function () {
        return localStorage['accessToken'];
    };
    
    service.setUserInLocalStorage = function (serverData) {
        localStorage.accessToken = serverData.access_token;
        localStorage.username = serverData.username;
    };

    return service;
});