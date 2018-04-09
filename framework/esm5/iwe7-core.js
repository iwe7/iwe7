import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, merge } from 'rxjs';
import { first, filter, takeWhile } from 'rxjs/operators';

var Iwe7CoreModule = /** @class */ (function () {
    function Iwe7CoreModule() {
    }
    return Iwe7CoreModule;
}());
Iwe7CoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [],
                exports: [],
                entryComponents: []
            },] },
];
var BaseComponent = /** @class */ (function () {
    function BaseComponent(cd) {
        this.cd = cd;
        this.props = new Observable();
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
        this.props = merge(this.props, props);
        this.__propsHandler();
    };
    BaseComponent.prototype.__propsHandler = function () {
        var _this = this;
        this.props = merge(this.props.pipe(first(function (val, idx) { return idx === 0; }, {})), this.props).pipe(filter(function (val) { return Object.keys(val).length > 0; }), takeWhile(function (val) { return !_this.needDestory; }));
        this.props.subscribe(function (res) {
            _this.cd.markForCheck();
        });
    };
    return BaseComponent;
}());
BaseComponent.propDecorators = {
    "props": [{ type: Input },],
};

export { Iwe7CoreModule, BaseComponent };
//# sourceMappingURL=iwe7-core.js.map
