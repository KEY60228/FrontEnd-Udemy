'use strict';
{
  class TextAnimation {
    constructor(el) {
      this.DOM = {};
      this.DOM.el = el instanceof HTMLElement ? el : document.querySelector(el);
      this.chars = this.DOM.el.innerHTML.trim().split("");
      this.DOM.el.innerHTML = this._splitText();
    }
    _splitText() {
      return this.chars.reduce((acc, curr) => {
        curr = curr.replace(/\s+/, '&nbsp;');
        return `${acc}<span class="char">${curr}</span>`;
      }, "");
    }
    animate() {
      this.DOM.el.classList.toggle('inview');
    }
  }
  class TweenTextAnimation extends TextAnimation {
    constructor(el) {
      super(el);
      this.DOM.chars = this.DOM.el.querySelectorAll('.char');
    }
    
    animate() {
      this.DOM.el.classList.add('inview');
      this.DOM.chars.forEach((c, i) => {
        TweenMax.to(c, .6, {
          ease: Back.easeOut,
          delay: i * .05,
          startAt: { y: '-50%', opacity: 0},
          y: '0%',
          opacity: 1
        });
      });
    }
  }
}

{
  document.addEventListener('DOMContentLoaded', function () {
    const cb = function (el, isIntersecting) {
      if (isIntersecting) {
        el.classList.add('inview');
      }
    }
    const so = new ScrollObserver('.cover-slide', cb, null);
  });
}

{
  class ScrollObserver {
    constructor(els, cb, options) {
      this.els = document.querySelectorAll(els);
      const defaultOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0,
        once: true,
      };
      this.cb = cb;
      this.options = Object.assign(defaultOptions, options);
      this.once = this.options.once;
      this._init();
    }

    _init() {
      const callback = function (entries, observer) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.cb(entry.target, true);
            if (this.once) {
              observer.unobserve(entry.target);
            }
          } else {
            this.cb(entry.target, false);
          }
        });
      };

      this.io = new IntersectionObserver(callback.bind(this), this.options);

      this.els.forEach(el => this.io.observe(el));
    }

    destroy() {
      this.io.disconnect();
    }
  }
}