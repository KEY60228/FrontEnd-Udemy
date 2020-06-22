'use strict';
{
    var hello = function (name, age) {
        console.log('Hello, ' + name + '(' + age + ')');
    };
    var name_1 = "Taro";
    var age = 25;
    hello(name_1, age);
}
{
    var person = {
        name: ['Taro', 'Jiro', 'Subro'],
        birth: 1994,
        interests: {
            sports: 'football',
            music: 'rock'
        },
        getAllName: function () {
            for (var _i = 0, _a = this.name; _i < _a.length; _i++) {
                var i = _a[_i];
                console.log(i, this.name[i]);
            }
        }
    };
    console.log(person.birth);
    person.getAllName();
}
{
    var todos = [
        {
            id: 1,
            title: 'working',
            completed: true
        },
        {
            id: 2,
            title: 'study',
            completed: false
        },
        {
            id: 3,
            title: 'shopping',
            completed: true
        }
    ];
    for (var i in todos) {
        var todo = todos[i];
        if (todo.completed === true) {
            console.log(todo.id, todo.title);
        }
    }
}
{
    var hello = function (callback) {
        console.log('hello ' + callback());
    };
    var getName = function () {
        return 'Ichiro';
    };
    hello(getName);
}
{
    var arry = ['Ichiro', 'Suzuki', 'Toyota', 'Nissan'];
    arry.forEach(function (val, i, ary) {
        console.log(val);
    });
}
{
    var arry = [1, 2, 3, 4, 5];
    arry.reduce(function (accu, curr) {
        console.log(accu, curr);
        return accu + curr;
    });
    var str = 'animation';
    var strArry = str.split('');
    console.log(strArry);
    var result = strArry.reduce(function (accu, curr) {
        return accu + "<" + curr + ">";
    }, '');
    console.log(result);
}
{
    var str = 'animation';
    var strArry = str.split('');
    var tag = function (accu, curr) {
        return accu + "<" + curr + ">";
    };
    var reduce = function (arry, callback, defaultValue) {
        var accu = defaultValue;
        for (var i = 0; i < arry.length; i++) {
            var curr = arry[i];
            accu = callback(accu, curr);
        }
        return accu;
    };
    var result = reduce(strArry, tag, "");
    console.log(result);
}
