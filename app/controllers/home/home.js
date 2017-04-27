'use strict';
app.controller('HomeCtrl',['$scope','$cookies','$rootScope','$state','showDisplay',
function ($scope,$cookies,$rootScope,$state,showDisplay) {

    $scope.showDisplay = showDisplay;


    var vm = this;
    vm.home = {
        header:'THIS IS THE HOME!',
        body:'THERE IS NOTHING HERE!'
    };
    vm.logout = function () {
        $cookies.remove('isLogin');
        $state.go('login');
    };
    vm.goDeep = function () {
        $state.go('thread.list')
    };
    vm.displayStyle = function () {
        return showDisplay.getStyle();
    };

}]);