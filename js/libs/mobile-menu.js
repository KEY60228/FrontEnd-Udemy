var MobileMenu = /** @class */ (function () {
    function MobileMenu() {
        this.DOM = {};
        this.DOM.btn = document.querySelector('.mobile-menu__btn');
        this.DOM.cover = document.querySelector('.mobile-menu__cover');
        this.DOM.container = document.querySelector('#global-container');
        this.eventType = this._getEventType();
        this._addEvent();
    }
    MobileMenu.prototype._getEventType = function () {
        return window.ontouchstart ? 'touchstart' : 'click';
    };
    MobileMenu.prototype._toggle = function () {
        this.DOM.container.classList.toggle('menu-open');
    };
    MobileMenu.prototype._addEvent = function () {
        this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
        this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
    };
    return MobileMenu;
}());
