'use strict';
app.service('treeService',function () {
   var self = this;
   var enhanceItem = function (item, childrenName) {
       item.$hasChildren = function () {
           var subItems = this[childrenName];
           return angular.isArray(subItems)&&subItems.length;
       };
       item.$foldToggle = function () {
           this.$folded = !this.$folded;
       };
       item.$isFolded = function () {
           return this.$folded;
       }
   };
   this.enhance = function (items,childrenName) {
       if(angular.isUndefined(childrenName)) {
           childrenName = 'items';
       }
       angular.forEach(items,function (item) {
           enhanceItem(item,childrenName);
           if(item.$hasChildren()) {
               self.enhance(item[childrenName],childrenName)
           }
       });
       return items;
   };
});
app.factory('hello',function ($http,$q) {
   return {
       getMes:function () {
           return  $http.get('api',{}).then(function (res) {
             return  res.data.data;
           });
       }
   }
});
app.factory('showDisplay',function () {
    return {
        displayStyle:'',
        showHello:function () {
            console.log('hello');
            this.displayStyle = 'hello'
        },
        showFuck:function () {
            console.log('fuck');
            this.displayStyle = 'fuck'
        },
        getStyle:function () {
            return this.displayStyle;
        }
    }
});