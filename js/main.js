'use strict';
document.addEventListener('DOMContentLoaded', function () {
    var hero = new HeroSlider('.swiper-container');
    hero.start();
    var cb = function (el, isIntersecting) {
        if (isIntersecting) {
            var ta = new TextAnimation(el);
            ta.animate();
        }
    };
    var so = new ScrollObserver('.animate-title', cb);
    var _inviewAnimation = function (el, inview) {
        if (inview) {
            el.classList.add('inview');
        }
        else {
            el.classList.remove('inview');
        }
    };
    var so2 = new ScrollObserver('.cover-slide', _inviewAnimation);
});
