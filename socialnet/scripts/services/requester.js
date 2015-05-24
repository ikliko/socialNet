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
        return makeRequest('POST', serviceUrl + '/Login', null, loginData);
    };

    service.logout = function () {
        return makeRequest('POST', serviceUrl + '/Logout', this.getHeaders());
    };

    service.register = function (registerData) {
        return makeRequest('POST', serviceUrl + '/Register', null, registerData);
    };

    service.getUserProfile = function () {
        return makeRequest('GET', serviceUrl + '/Profile', this.getHeaders());
    };

    service.editPassword = function (changePassData) {
        return makeRequest('PUT', serviceUrl + '/changepassword', this.getHeaders(), changePassData);
    };

    service.editProfile = function (editUserData) {
        return makeRequest('PUT', baseUrl + '/me', this.getHeaders(), editUserData);
    };

    service.getFullUserData = function () {
        return makeRequest('GET', baseUrl + '/me', this.getHeaders());
    };

    service.getFeed = function (feedData) {
        return makeRequest('GET', baseUrl + '/me/feed?StartPostId=' + feedData.startPostId + '&PageSize=' + feedData.pageSize, this.getHeaders());
    };

    service.getAllFriends = function () {
        return makeRequest('GET', baseUrl + '/me/friends', this.getHeaders());
    };

    service.getReuqests = function () {
        return makeRequest('GET', baseUrl + '/me/requests', this.getHeaders());
    };

    service.likePost = function (id) {
        return makeRequest('POST', baseUrl + '/posts/' + id + '/likes', this.getHeaders());
    };

    service.unlikePost = function (id) {
        return makeRequest('DELETE', baseUrl + '/posts/' + id + '/likes', this.getHeaders());
    };

    service.getPost = function (id) {
        return makeRequest('GET', baseUrl + '/posts/' + id, this.getHeaders());
    };

    service.getUsername = function () {
        return localStorage['username'];
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
        localStorage.username = serverData.userName;
    };

    service.addFullDataInStorage = function (serverData) {
        localStorage.fullName = serverData.name;
        localStorage.genderType = serverData.gender;
        localStorage.profileImage = serverData.profileImageData;
        localStorage.coverImage = serverData.coverImageData;
        localStorage.email = serverData.email;
    };

    service.removeUserInLocalStorage = function () {
        delete localStorage['accessToken'];
        delete localStorage['username'];
        delete localStorage['fullName'];
        delete localStorage['genderType'];
        delete localStorage['email'];
        delete localStorage['gender'];
        delete localStorage['coverImage'];
        delete localStorage['profileImage'];
    };
    
    service.rememberUser = function (rememberData) {
        localStorage.remembered = {
            username: rememberData.username,
            password: rememberData.password
        };
    };

    return service;
});