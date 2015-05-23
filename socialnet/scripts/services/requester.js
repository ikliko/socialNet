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
//'use strict';
//
//SocialNetwork.factory('authentication', function ($http, baseServiceUrl) {
//    var service = {};
//
//    var serviceUrl = baseServiceUrl + '/user';
//
//    service.Login = function (loginData, success, error) {
//        $http.post(serviceUrl + '/login', loginData)
//            .success(function (data, status, headers, config) {
//                success(data);
//            }).error(error);
//    };
//
//    service.Register = function (registerData, success, error) {
//        $http.post(serviceUrl + '/register', registerData)
//            .success(function (data, status, headers, config) {
//                success(data);
//            }).error(error);
//    };
//
//    service.GetUserProfile = function (success, error) {
//        $http.get(serviceUrl + '/profile', {headers: this.GetHeaders()})
//            .success(function (data, status, headers, config) {
//                success(data)
//            }).error(error);
//    };
//
//    service.EditUserProfile = function (editUserData, success, error) {
//        $http.put(serviceUrl + '/profile', editUserData, {headers: this.GetHeaders()})
//            .success(function (data, status, headers, config) {
//                success(data)
//            }).error(error);
//    };
//
//    service.ChangePassword = function (passwordData, success, error) {
//        $http.put(serviceUrl + '/ChangePassword', passwordData, {headers: this.GetHeaders()})
//            .success(function (data, status, headers, config) {
//                success()
//            }).error(error);
//    };
//
//    service.SetCredentials = function (serverData) {
//        localStorage['accessToken'] = serverData.access_token;
//        localStorage['username'] = serverData.username;
//        localStorage['isAdmin'] = serverData.isAdmin ? serverData.isAdmin : false;
//    };
//
//    service.GetUsername = function () {
//        return localStorage['username'];
//    };
//
//    service.GetIsAdmin = function () {
//        return localStorage['isAdmin'];
//    };
//
//    service.ClearCredentials = function () {
//        localStorage.clear();
//    };
//
//    service.GetHeaders = function() {
//        return {
//            Authorization: "Bearer " + localStorage['accessToken']
//        };
//    };
//
//    service.isLoggedIn = function () {
//        return localStorage['accessToken'];
//    };
//
//    return service;
//});