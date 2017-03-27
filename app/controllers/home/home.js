'use strict';
app.controller('HomeCtrl',['$scope','$cookies','$rootScope','$state',function ($scope,$cookies,$rootScope,$state) {
    var vm = this;
    vm.home = {
        header:'THIS IS THE HOME!',
        body:'THERE IS NOTHING HERE!'
    };
    vm.logout = function () {
        $cookies.remove('isLogin');
        $state.go('login');
    }
}]);