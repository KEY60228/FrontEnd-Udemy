'use strict';
{
    document.addEventListener('DOMContentLoaded', function () {
        var ta = new TextAnimation_1('.animate-title');
        var ta2 = new TextAnimation_1('.animate-title-2');
        var btn = document.querySelector('#js-btn');
        btn.addEventListener('click', function () {
            ta.animate();
            ta2.animate();
        });
    });
    var TextAnimation_1 = /** @class */ (function () {
        function TextAnimation(el) {
            this.el = '';
            this.chars = '';
            this.el = document.querySelector(el);
            this.chars = this.el.innerHTML.trim().split("");
            this.el.innerHTML = this._splitText();
        }
        TextAnimation.prototype._splitText = function () {
            return this.chars.reduce(function (acc, curr) {
                curr = curr.replace(/\s+/, '&nbsp;');
                return acc + "<span class=\"char\">" + curr + "</span>";
            }, "");
        };
        TextAnimation.prototype.log = function () {
            console.log(this.el);
        };
        TextAnimation.prototype.animate = function () {
            this.el.classList.toggle('inview');
        };
        return TextAnimation;
    }());
}
