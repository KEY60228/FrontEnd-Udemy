'use strict'

{
  const btn: HTMLElement = document.querySelector('#btn');
  const h1: HTMLElement = document.querySelector('#main-title');

  const colorize: any = function () {
    h1.style.color = 'red';
  }

  btn.addEventListener('click', colorize);
}