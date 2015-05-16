/**
 * Created by kliko on 15.05.15.
 */
var socialNet = angular.module('socialNet', ['ngResource', 'ngRoute'])
    .config(function($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                template : '<div>home</div>'
            })
            .when('/login', {
                template : '<div>login</div>'
            })
            .when('/register', {
                template : 'register'
            });

        // use the HTML5 History API
        $locationProvider.html5Mode(false)
            .hashPrefix('!');
    });