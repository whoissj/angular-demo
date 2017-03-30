'use strict';
app.filter('error',function (Errors) {
   return function (name,customMes) {
       var errors = angular.extend({},Errors,customMes);
       return errors[name] || '';
   }
});
app.filter('page',function () {
   return function (input, page, pageSize) {
       if(!input) {
           return input;
       }
       if(page<0 || pageSize<=0 ){
           return [];
       }
       var start = page*pageSize;
       var end = (page + 1)*pageSize;
       return input.slice(start,end);
   }
});
app.filter('treeFilter',function (treeService) {
   return function (items,childrenName) {
       treeService.enhance(items,childrenName);
       return items;
   }
});