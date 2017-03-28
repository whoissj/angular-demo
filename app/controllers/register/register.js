'use strict';
app.controller('RegisterCtrl',function ($scope,$state) {
   var vm = this;
   vm.submit = function (form) {
       console.log(form);
       $state.go('login');
   };
   vm.goBack = function () {
     $state.go('login')
   };
   vm.accept = true;
});
