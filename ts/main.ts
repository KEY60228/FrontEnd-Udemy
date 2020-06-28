'use strict';

{
  document.addEventListener('DOMContentLoaded', function() {
    const hero = new HeroSlider('.swiper-container');
    hero.start({delay: 2000});
    setTimeout(() => {
      hero.stop();
    }, 5000);
  });

  class HeroSlider {
    constructor(el) {
      this.el = el;
      this.swiper = this._initSwiper();
    }

    _initSwiper() {
      return new Swiper (this.el, {
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
            slidesPerView: 2,
          }
        },
      });
    }

    start(options = {}) {
      options = Object.assign({
        delay: 4000,
        disableOnInteraction: false,
      }, options);

      this.swiper.params.autoplay = options
      this.swiper.autoplay.start();
    }

    stop() {
      this.swiper.autoplay.stop();
    }
  }
}