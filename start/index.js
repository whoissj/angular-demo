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


app.controller('filterCtrl',function ($scope,Data) {
      $scope.data = Data
});
app.filter('reverse',function(Data){
  return function(text){
    if(text) {

    return  '\'' + text.split("").reverse().join("")+ '\'' + "   " + '\'' + Data.message + '\'';
    }
  }
});

app.constant('students', [
    {name:'夏明',age:13,grade:7,city:"beijing",school:"beida"},
    {name:'陶渊明',age:9,grade:3,city:"shanghai",school:"qinghua"},
    {name:'杜甫',age:14,grade:8,city:"shengzhen",school:"fudan"},
    {name:'王安石',age:11,grade:5,city:"hangzhou",school:"tongji"},
    {name:'李白',age:7,grade:1,city:"xiamen",school:"keda"},
    {name:'谢玄',age:15,grade:9,city:'hefei',school:"shangxi"}
  ]);
app.constant('labels',[
    {label:'姓名',name:'name'},
    {label:'年龄',name:'age'},
    {label:'年级',name:'grade'},
    {label:'城市',name:'city'},
    {label:'学校',name:'school'}
]);
app.controller('stnCtrl',function ($scope,students,labels) {
        $scope.labels = labels;
        $scope.students = students;
        $scope.sort = {
            order:'age',
            direction:false,
            icon:'glyphicon-triangle-bottom',
            orderTurn:function (labelname) {
                if(labelname === this.order) {
                    this.direction = !this.direction;
                }else {
                    this.order = labelname;
                    this.direction = false;
                }
                this.icon = this.direction?'glyphicon-triangle-bottom':'glyphicon-triangle-top';
            }
        };
});