'use strict';
app.controller('LoginCtrl',function ($scope,$state,$cookies,$rootScope) {
    var vm = this;

    vm.login = function () {
        $cookies.put('isLogin',true);
        $state.go('home');
    };
    vm.goRegister = function () {
        $state.go('register')
    }
});