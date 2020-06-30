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
        // @see https://github.com/w3c/IntersectionObserver/tree/master/polyfill
        this.io.POLL_INTERVAL = 100;
        this.els.forEach(function (el) { return _this.io.observe(el); });
    };
    ScrollObserver.prototype.destroy = function () {
        this.io.disconnect();
    };
    return ScrollObserver;
}());
