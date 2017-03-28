'use strict';
app.controller('ThreadListCtrl',function ($scope) {
   var vm = this;
    vm.items = [
        {
            title: '这是第一个主题',
            poster: '雪狼',
            dateCreated: '2015-02-19T00:00:00'
        },
        {
            title: '这是第二个主题，含有字母abcd和数字1234',
            poster: '破狼',
            dateCreated: '2015-02-19T15:00:00'
        }
    ];
    vm.labels = [
        {name:'title',label:'主题'},
        {name:'poster',label:'作者'},
        {name:'dateCreated',label:'发帖时间'}
    ];
    for (var i = 0; i < 10; ++i) {
        var random1 = Math.ceil(Math.random()*20);
        var random2 = Math.ceil(Math.random()*20);
        var random3 = Math.ceil(Math.random()*30);
        vm.items.push({
            title: '主题' + random1,
            poster: 'user' + random2,
            dateCreated: '2015-02-' + random3 + 'T15:00:00'
        });
    }
});