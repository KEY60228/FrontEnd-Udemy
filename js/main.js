'use strict';
{
    var btn = document.querySelector('#btn');
    var h1_1 = document.querySelector('#main-title');
    var colorize = function () {
        h1_1.style.color = 'red';
    };
    btn.addEventListener('click', colorize);
}
