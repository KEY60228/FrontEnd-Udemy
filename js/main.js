'use strict';
{
    document.addEventListener('DOMContentLoaded', function () {
        var hero = new HeroSlider_1('.swiper-container');
        hero.start({ delay: 2000 });
        setTimeout(function () {
            hero.stop();
        }, 5000);
    });
    var HeroSlider_1 = /** @class */ (function () {
        function HeroSlider(el) {
            this.el = el;
            this.swiper = this._initSwiper();
        }
        HeroSlider.prototype._initSwiper = function () {
            return new Swiper(this.el, {
                // Optional parameters
                // direction: 'vertical',
                loop: true,
                grabCursor: true,
                effext: 'coverflow',
                centeredSlides: true,
                slidesPerView: 1,
                speed: 1000,
                breakpoints: {
                    1024: {
                        slidesPerView: 2
                    }
                }
            });
        };
        HeroSlider.prototype.start = function (options) {
            if (options === void 0) { options = {}; }
            options = Object.assign({
                delay: 4000,
                disableOnInteraction: false
            }, options);
            this.swiper.params.autoplay = options;
            this.swiper.autoplay.start();
        };
        HeroSlider.prototype.stop = function () {
            this.swiper.autoplay.stop();
        };
        return HeroSlider;
    }());
}
