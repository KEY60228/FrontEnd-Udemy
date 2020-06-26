'use strict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
{
    var TextAnimation = /** @class */ (function () {
        function TextAnimation(el) {
            this.DOM = {};
            this.DOM.el = el instanceof HTMLElement ? el : document.querySelector(el);
            this.chars = this.DOM.el.innerHTML.trim().split("");
            this.DOM.el.innerHTML = this._splitText();
        }
        TextAnimation.prototype._splitText = function () {
            return this.chars.reduce(function (acc, curr) {
                curr = curr.replace(/\s+/, '&nbsp;');
                return acc + "<span class=\"char\">" + curr + "</span>";
            }, "");
        };
        TextAnimation.prototype.animate = function () {
            this.DOM.el.classList.toggle('inview');
        };
        return TextAnimation;
    }());
    var TweenTextAnimation = /** @class */ (function (_super) {
        __extends(TweenTextAnimation, _super);
        function TweenTextAnimation(el) {
            var _this = _super.call(this, el) || this;
            _this.DOM.chars = _this.DOM.el.querySelectorAll('.char');
            return _this;
        }
        TweenTextAnimation.prototype.animate = function () {
            this.DOM.el.classList.add('inview');
            this.DOM.chars.forEach(function (c, i) {
                TweenMax.to(c, .6, {
                    ease: Back.easeOut,
                    delay: i * .05,
                    startAt: { y: '-50%', opacity: 0 },
                    y: '0%',
                    opacity: 1
                });
            });
        };
        return TweenTextAnimation;
    }(TextAnimation));
}
{
    document.addEventListener('DOMContentLoaded', function () {
        var cb = function (el, isIntersecting) {
            if (isIntersecting) {
                el.classList.add('inview');
            }
        };
        var so = new ScrollObserver('.cover-slide', cb, null);
    });
}
{
    var ScrollObserver = /** @class */ (function () {
        function ScrollObserver(els, cb, options) {
            this.els = document.querySelectorAll(els);
            var defaultOptions = {
                root: null,
                rootMargin: "0px",
                threshold: 0,
                once: true
            };
            this.cb = cb;
            this.options = Object.assign(defaultOptions, options);
            this.once = this.options.once;
            this._init();
        }
        ScrollObserver.prototype._init = function () {
            var _this = this;
            var callback = function (entries, observer) {
                var _this = this;
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        _this.cb(entry.target, true);
                        if (_this.once) {
                            observer.unobserve(entry.target);
                        }
                    }
                    else {
                        _this.cb(entry.target, false);
                    }
                });
            };
            this.io = new IntersectionObserver(callback.bind(this), this.options);
            this.els.forEach(function (el) { return _this.io.observe(el); });
        };
        ScrollObserver.prototype.destroy = function () {
            this.io.disconnect();
        };
        return ScrollObserver;
    }());
}
