'use strict';
app.directive('bfFieldError',function ($compile) {
    return {
        restrict:'A',
        require:'ngModel',
        link:function (scope, element, attrs, ngModel) {
            var subScope = scope.$new(true);


            /*为什么这里用函数的返回值呢，而不是直接赋值呢。
            * 跟run.js里配置登录状态的跳转拦截一样。
            * */
            subScope.hasError = function () {
                return ngModel.$invalid && ngModel.$dirty;
            };
            subScope.errors = function () {
              return ngModel.$error;
            };
            subScope.customMes = scope.$eval(attrs.bfFieldError);
            var hint = $compile('<ul class="alert alert-danger" style="margin-top: 15px" ng-if="hasError()"><li ng-repeat="(name,value) in errors()" ng-if="value">{{name|error:customMes}}</li></ul>')(subScope);
            element.after(hint);
        }
    }
});
app.directive('bfAssetSameAs',function () {
   return {
       restrict:'A',
       require:'ngModel',
       link:function (scope, element, attrs, ngModel) {
            /*console.log(attrs.bfAssetSameAs);*//*只是一个字符串*/
            /*console.log(scope.$eval(attrs.bfAssetSameAs));*//*能拿到表达式的值*/
            function isSame(value) {
            //通过scope.$eval把att.bfAssertSameAs作为一个表达式在当前作用域中求值，否则它只是一个固定的字符串
                var anotherValue = scope.$eval(attrs.bfAssetSameAs);
                return value === anotherValue;
            }
            //1.2.x只能用$parsers实现验证
        /* ngModel.$parsers.push(function (value) {
            //调用$setValidity设置验证结果，第一个参数是名字，和$error中的属性名一致，但是取值相反，因为这里表示的是“有效”，而$error中表示“无效”
                ngModel.$setValidity('same',isSame(value));

                /!*return isSame(value) ? value : undefined;*!/    /!*需要注意的是$setValidity的返回值为 undefined或者false时会在 $error里面会存在parse:true的问题
                                                                 书上的写法有问题，所以应该直接返回true*!/
                return true;
            });
        */
           //1.3.x增加了专门的$validators数组，可用更好的方式实现验证。这里个数组都是放需要被执行的函数的
                ngModel.$validators.same = function (value) {
                  return isSame(value);
                };


            // 这是assertSameAs验证器所特有的，因为当对照值(即vm.form.password)发生变化时，也要更新有效性状态
           scope.$watch(
               function () {
                   return scope.$eval(attrs.bfAssetSameAs);
               },
               function () {
                   ngModel.$setValidity('same', isSame(ngModel.$modelValue));
               }
           )
       }
   }
});
app.directive('myDirective',function () {
   return {
       restrict:'A',
       replace:true,
       scope:{
           myText:"@",
           myUrl:"=",
           onSend:'&'
       },
       template:'<div>' +
                    '<label class="control-label">dire</label>' +
                    '<div  class="panel-heading"><a href="{{myUrl}}">{{myText}}</a></div>' +
                    '<input class="form-control" type="text" ng-model="myUrl">' +
                    '<input class="form-control" type="text" ng-model="myText">' +
                '</div>',
       controller:function ($scope,$element,$attrs) {
         console.log($scope);
         console.log($element);
         console.log($attrs);
       },
       link:function (scope, ele, attr) {
           console.log(scope);
           console.log(ele);
           console.log(attr);
           scope.onSend();
       }
   }
})
    .directive('myClock',function ($timeout) {
        return {
            restrict:'E',
            replace:true,
            scope:{},
            template:'<p>{{date}}</p>',
            controller:function ($scope) {
                function getClock() {
                    var clock = new Date().getFullYear() + '-' + new Date().getMonth() +'-'
                        + new Date().getDate() + ' ' + new Date().getHours() + ':'
                        + new Date().getMinutes() + ':' + new Date().getSeconds();
                    return clock;
                }
                $scope.date = getClock();
                var loop = function () {
                    $timeout(function () {
                        $scope.date = getClock();
                        loop();
                    },1000)
                };
                loop();
            }
        }
    })
.directive('myName',function () {
    return {
        restrict:'A',
        require:'ngModel',
        link:function (scope, ele, attrs, model) {
            console.log(model)
        }
    }
});
