'use strict';
app.filter('error',function (Errors) {
   return function (name,customMes) {
       var errors = angular.extend({},Errors,customMes);
       return errors[name] || '';
   }
});
