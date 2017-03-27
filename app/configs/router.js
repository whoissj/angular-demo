'use strict';
app.config(['$stateProvider','$urlRouterProvider','$locationProvider',function ($stateProvider, $urlRouterProvider,$locationProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home',{
            url:'/home',
            templateUrl:'tpls/home/home.html',
            controller:'HomeCtrl as vm'
        })
        .state('login',{
            url:'/login',
            templateUrl:'tpls/login/login.html',
            controller:'LoginCtrl as vm'
        })
        .state('register',{
            url:'/register',
            templateUrl:'tpls/register/register.html',
            controller:'RegisterCtrl as vm'
        })
}]);