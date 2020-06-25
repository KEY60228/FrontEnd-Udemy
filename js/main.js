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
        var els = document.querySelectorAll('.animate-title');
        var cb = function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var ta = new TextAnimation(entry.target);
                    ta.animate();
                    observer.unobserve(entry.target);
                }
                else {
                }
            });
        };
        var options = {
            root: null,
            rootMargin: "0px",
            threshold: 0
        };
        var io = new IntersectionObserver(cb, options);
        els.forEach(function (el) { return io.observe(el); });
    });
}
