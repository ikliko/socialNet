/**
 * Created by kliko on 15.05.15.
 */
var socialNet = angular.module('socialNet', ['ngResource', 'ngRoute'])
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
            .when('/PageNotFound', {
                template: '<h1 class="text-center">Page Not Found/404</h1>'
            })
            .when('/users/:username', {
                templateUrl: './templates/pages/wall.html'
            })
            .otherwise({redirectTo:'/PageNotFound'});

        // use the HTML5 History API
        $locationProvider.html5Mode(false)
            .hashPrefix('!');
    });