/**
 * Created by kliko on 15.05.15.
 */
var socialNet = angular.module('socialNet', ['ngResource', 'ngRoute' ])
    .constant('baseUrl', 'http://softuni-social-network.azurewebsites.net/api')
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl : './templates/pages/guestHome.html'
            })
            .when('/login', {
                templateUrl : './templates/pages/login.html'
            })
            .when('/register', {
                templateUrl : './templates/pages/register.html'
            })
            .when('/feed', {
                templateUrl: './templates/pages/feed.html'
            })
            .when('/users/:username', {
                templateUrl: './templates/pages/wall.html',
                controller: 'wallPageController'
            })
            .when('/edit/profile', {
                templateUrl: './templates/pages/edit-profile.html',
                controller: 'editProfileController'
            })
            .when('/edit/password', {
                templateUrl: './templates/pages/edit-password.html',
                controller: 'editPasswordController'
            })
            .when('/friends-requests', {
                templateUrl: './templates/pages/friends-requests.html',
                controller: 'friendsRequestsController'
            })
            .when('/PageNotFound', {
                template: '<h1 class="text-center">Page Not Found/404</h1>'
            })
            .when('/AccesDenied', {
                template: '<h1 class="text-center">Access Denied! <a href="#!/login" class="btn btn-lg btn-primary">Log in</a> first.</h1>'
            })
            .otherwise({redirectTo:'/PageNotFound'});

        // use the HTML5 History API
        $locationProvider.html5Mode(false)
            .hashPrefix('!');
    });