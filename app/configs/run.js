'use strict';
app.run(['$state','$rootScope','$cookies',
function ($state,$rootScope,$cookies) {
    /*此处直接使用 $rootScope.isLogin = $cookies.get('isLogin') 是不行的*/
    $rootScope.isLogin = function () {
       return !!$cookies.get('isLogin')
    };
    /*这个事件是在模板解析之前触发*/
    $rootScope.$on('$stateChangeStart',
        function(event, toState, toParams, fromState, fromParams, options){
            if(!$rootScope.isLogin()&& toState.url !=='/login'&&toState.url!=='/register') {
                event.preventDefault(); /*阻止html模板解析，这样能防止页面跳转判断时会在别的页面一闪而过*/
                $state.go('login')
            }
            if($rootScope.isLogin()&&toState.url === '/login') {
                event.preventDefault(); /*阻止html模板解析，这样能防止页面跳转判断时会在别的页面一闪而过*/
                $state.go('home')
            }
        })
}]);