'use strict';

{
  document.addEventListener('DOMContentLoaded', function() { 
    const ta = new TextAnimation('.animate-title');
    const ta2 = new TextAnimation('.animate-title-2');
    const btn = document.querySelector('#js-btn');

    btn.addEventListener('click', function() {
      ta.animate();
      ta2.animate();
    });
  });

  class TextAnimation {
    el = '';
    chars = '';

    constructor(el) {
      this.el = document.querySelector(el);
      this.chars = this.el.innerHTML.trim().split("");
      this.el.innerHTML = this._splitText();
    }
    
    _splitText() {
      return this.chars.reduce(function(acc, curr) {
        curr = curr.replace(/\s+/, '&nbsp;');
        return `${acc}<span class="char">${curr}</span>`;
      }, "");
    }

    log() {
      console.log(this.el);
    }

    animate() {
      this.el.classList.toggle('inview');
    }
  }
}
