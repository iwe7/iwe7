(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define('iwe7-core', ['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['iwe7-core'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

var ThemesModule = /** @class */ (function () {
    function ThemesModule() {
    }
    return ThemesModule;
}());
ThemesModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule]
            },] },
];
var Iwe7Colors = new core.InjectionToken('Iwe7ThemesColors', {
    providedIn: 'root',
    factory: function () {
        return {
            default: {
                color: '#fff',
                bg: '#4a4c5b'
            },
            disabled: {
                bg: '#ccc',
                color: '#fff'
            },
            light: {
                bg: '#fff',
                color: '#666'
            },
            outline: {
                bg: 'transparent',
                color: '#666'
            },
            primary: {
                bg: '#fc9153',
                color: '#fff'
            }
        };
    }
});
var Iwe7ColorsService = /** @class */ (function () {
    function Iwe7ColorsService(injector) {
        this.injector = injector;
    }
    Iwe7ColorsService.prototype.getColor = function (key) {
        return ((this.injector.get(Iwe7Colors))).get(key);
    };
    Iwe7ColorsService.prototype.getRandomColor = function () {
        return "#" + ("00000" + ((Math.random() * 0x1000000) << 0).toString(16)).substr(-6);
    };
    return Iwe7ColorsService;
}());
Iwe7ColorsService.decorators = [
    { type: core.Injectable, args: [{
                providedIn: 'root'
            },] },
];
Iwe7ColorsService.ctorParameters = function () { return [
    { type: core.Injector, },
]; };
Iwe7ColorsService.ngInjectableDef = core.defineInjectable({ factory: function Iwe7ColorsService_Factory() { return new Iwe7ColorsService(core.inject(core.INJECTOR)); }, token: Iwe7ColorsService, providedIn: "root" });
var ZIndexService = /** @class */ (function () {
    function ZIndexService() {
        this.index = 1000;
    }
    ZIndexService.prototype.getIndex = function () {
        return this.index++;
    };
    return ZIndexService;
}());
ZIndexService.decorators = [
    { type: core.Injectable, args: [{
                providedIn: 'root'
            },] },
];
ZIndexService.ctorParameters = function () { return []; };
ZIndexService.ngInjectableDef = core.defineInjectable({ factory: function ZIndexService_Factory() { return new ZIndexService(); }, token: ZIndexService, providedIn: "root" });

exports.ThemesModule = ThemesModule;
exports.Iwe7ColorsService = Iwe7ColorsService;
exports.ZIndexService = ZIndexService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=iwe7-core.umd.js.map
