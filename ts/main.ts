'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const hero = new HeroSlider('.swiper-container');
  hero.start();

  const cb = function (el, isIntersecting) {
    if(isIntersecting) {
      const ta = new TextAnimation(el);
      ta.animate();
    }
  }
  const so = new ScrollObserver('.animate-title', cb);

  const _inviewAnimation = function (el, inview) {
    if(inview) {
      el.classList.add('inview');
    } else {
      el.classList.remove('inview');
    }
  }
  const so2 = new ScrollObserver('.cover-slide', _inviewAnimation);

  const header = document.querySelector('.header');;
  const _navAnimation = function (el, inview) {
    if(inview) {
      header.classList.remove('triggered');
    } else {
      header.classList.add('triggered');
    }
  }
  const so3 = new ScrollObserver('.nav-trigger', _navAnimation, {once: false});

  new MobileMenu();
});