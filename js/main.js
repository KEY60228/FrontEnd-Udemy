'use strict';
document.addEventListener('DOMContentLoaded', function () {
    new Main();
});
var Main = /** @class */ (function () {
    function Main() {
        this.header = document.querySelector('.header');
        this.sides = document.querySelectorAll('.side');
        this._observers = [];
        this._init();
    }
    Object.defineProperty(Main.prototype, "observers", {
        get: function () {
            return this._observers;
        },
        set: function (val) {
            this._observers.push(val);
        },
        enumerable: false,
        configurable: true
    });
    Main.prototype._init = function () {
        new MobileMenu();
        this.hero = new HeroSlider('.swiper-container');
        Pace.on('done', this._paceDone.bind(this));
    };
    Main.prototype._paceDone = function () {
        this._scrollInit();
    };
    Main.prototype._textAnimation = function (el, isIntersecting) {
        if (isIntersecting) {
            var ta = new TweenTextAnimation(el);
            ta.animate();
        }
    };
    Main.prototype._inviewAnimation = function (el, inview) {
        if (inview) {
            el.classList.add('inview');
        }
        else {
            el.classList.remove('inview');
        }
    };
    Main.prototype._navAnimation = function (el, inview) {
        if (inview) {
            this.header.classList.remove('triggered');
        }
        else {
            this.header.classList.add('triggered');
        }
    };
    Main.prototype._toggleSlideAnimation = function (el, inview) {
        if (inview) {
            this.hero.start();
        }
        else {
            this.hero.stop();
        }
    };
    Main.prototype._sideAnimation = function (el, inview) {
        if (inview) {
            this.sides.forEach(function (side) {
                side.classList.add('inview');
            });
        }
        else {
            this.sides.forEach(function (side) {
                side.classList.remove('inview');
            });
        }
    };
    Main.prototype._destroyObservers = function () {
        this.observers.forEach(function (ob) {
            ob.destroy();
        });
    };
    Main.prototype._scrollInit = function () {
        this.observers = new ScrollObserver('.nav-trigger', this._navAnimation.bind(this), { once: false });
        this.observers = new ScrollObserver('.cover-slide', this._inviewAnimation);
        this.observers = new ScrollObserver('.tween-animate-title', this._textAnimation);
        this.observers = new ScrollObserver('.swiper-container', this._toggleSlideAnimation.bind(this), { once: false });
        this.observers = new ScrollObserver('.appear', this._inviewAnimation);
        this.observers = new ScrollObserver('#main-content', this._sideAnimation.bind(this), { once: false, rootMargin: "-300px 0px" });
    };
    return Main;
}());
