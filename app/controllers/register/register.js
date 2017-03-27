'use strict';
app.controller('RegisterCtrl',function ($scope,$state) {
   var vm = this;
   vm.submit = function (form) {
       console.log(form);
   };
   vm.goBack = function () {
     $state.go('login')
   }
});
