(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs'), require('rxjs/operators')) :
	typeof define === 'function' && define.amd ? define('iwe7-core', ['exports', '@angular/core', '@angular/common', 'rxjs', 'rxjs/operators'], factory) :
	(factory((global['iwe7-core'] = {}),global.ng.core,global.ng.common,global.rxjs,global.Rx.Observable.prototype));
}(this, (function (exports,core,common,rxjs,operators) { 'use strict';

var Iwe7CoreModule = /** @class */ (function () {
    function Iwe7CoreModule() {
    }
    return Iwe7CoreModule;
}());
Iwe7CoreModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [],
                exports: [],
                entryComponents: []
            },] },
];
var BaseComponent = /** @class */ (function () {
    function BaseComponent(cd) {
        this.cd = cd;
        this.props = new rxjs.Observable();
        this.needDestory = false;
    }
    BaseComponent.prototype.ngOnChanges = function (changes) {
        if ('props' in changes) {
            if (!changes['props'].isFirstChange) {
                this.__propsHandler();
            }
        }
    };
    BaseComponent.prototype.ngOnDestroy = function () {
        this.needDestory = true;
    };
    BaseComponent.prototype.ngOnInit = function () {
        this.__propsHandler();
    };
    BaseComponent.prototype.setProps = function (props) {
        this.props = rxjs.merge(this.props, props);
        this.__propsHandler();
    };
    BaseComponent.prototype.__propsHandler = function () {
        var _this = this;
        this.props = rxjs.merge(this.props.pipe(operators.first(function (val, idx) { return idx === 0; }, {})), this.props).pipe(operators.filter(function (val) { return Object.keys(val).length > 0; }), operators.takeWhile(function (val) { return !_this.needDestory; }));
        this.props.subscribe(function (res) {
            _this.cd.markForCheck();
        });
    };
    return BaseComponent;
}());
BaseComponent.propDecorators = {
    "props": [{ type: core.Input },],
};

exports.Iwe7CoreModule = Iwe7CoreModule;
exports.BaseComponent = BaseComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=iwe7-core.umd.js.map
