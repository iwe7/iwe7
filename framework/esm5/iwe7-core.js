import { Directive, ViewContainerRef, NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, merge } from 'rxjs';
import { first, filter, takeWhile } from 'rxjs/operators';

var GetViewRefDirective = /** @class */ (function () {
    function GetViewRefDirective(view) {
        this.view = view;
    }
    return GetViewRefDirective;
}());
GetViewRefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[getViewRef]',
                exportAs: 'getViewRef'
            },] },
];
GetViewRefDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
var Iwe7CoreModule = /** @class */ (function () {
    function Iwe7CoreModule() {
    }
    return Iwe7CoreModule;
}());
Iwe7CoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [GetViewRefDirective],
                exports: [GetViewRefDirective],
                entryComponents: []
            },] },
];
var Iwe7Base = /** @class */ (function () {
    function Iwe7Base(cd) {
        this.cd = cd;
        this.props = new Observable();
        this.needDestory = false;
    }
    Iwe7Base.prototype.ngOnChanges = function (changes) {
        if ('props' in changes) {
            if (!changes['props'].isFirstChange) {
                this.__propsHandler();
            }
        }
    };
    Iwe7Base.prototype.ngOnDestroy = function () {
        this.needDestory = true;
    };
    Iwe7Base.prototype.ngOnInit = function () {
        this.__propsHandler();
    };
    Iwe7Base.prototype.setProps = function (props) {
        this.props = merge(this.props, props);
        this.__propsHandler();
    };
    Iwe7Base.prototype.__propsHandler = function () {
        var _this = this;
        this.props = merge(this.props.pipe(first(function (val, idx) { return idx === 0; }, ({}))), this.props).pipe(filter(function (val) { return Object.keys(val).length > 0; }), takeWhile(function (val) { return !_this.needDestory; }));
        this.props.subscribe(function (res) {
            _this.onPropsChange(res);
            _this.cd.markForCheck();
        });
    };
    return Iwe7Base;
}());
Iwe7Base.propDecorators = {
    "props": [{ type: Input },],
};

export { Iwe7CoreModule, Iwe7Base, GetViewRefDirective };
//# sourceMappingURL=iwe7-core.js.map
