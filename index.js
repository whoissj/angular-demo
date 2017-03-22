/**
 * Created by jun on 2017/3/22.
 */
var app = angular.module('app',[]);
app.controller('firstCtrl',function ($scope) {
    $scope.reversedMes = function (message) {
        if(message) {
            return message.split("").reverse().join("");
        }
    }
});

app.controller('secondCtrl',function ($scope,Data) {
    $scope.data = Data;
});
app.controller('thirdCtrl',function ($scope,Data) {
    $scope.data = Data
});
app.factory('Data',function () {
   return {
       message:'frome a service'
   }
});