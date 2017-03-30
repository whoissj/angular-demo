'use strict';
app.config(['$stateProvider','$urlRouterProvider','$locationProvider',function ($stateProvider, $urlRouterProvider,$locationProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
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
        .state('home',{
            url:'/home',
            templateUrl:'tpls/home/home.html',
            controller:'HomeCtrl as vm'
        })
        .state('thread',{
            url:'/thread',
            template:'<div ui-view></div>',
            abstract:true
        })
        .state('thread.list',{
            url:'/list',
            templateUrl:'tpls/thread/list.html',
            controller:'ThreadListCtrl as vm'
        })
        .state('thread.tree',{
            url:'/tree',
            templateUrl:'tpls/thread/tree.html',
            controller:'ThreadTreeCtrl as vm'
        })
}]);