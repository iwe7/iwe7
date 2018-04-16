import { NgModule, Injectable, InjectionToken, Injector, defineInjectable, inject, INJECTOR } from '@angular/core';
import { CommonModule } from '@angular/common';

var ThemesModule = /** @class */ (function () {
    function ThemesModule() {
    }
    return ThemesModule;
}());
ThemesModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule]
            },] },
];
var Iwe7Colors = new InjectionToken('Iwe7ThemesColors', {
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
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
Iwe7ColorsService.ctorParameters = function () { return [
    { type: Injector, },
]; };
Iwe7ColorsService.ngInjectableDef = defineInjectable({ factory: function Iwe7ColorsService_Factory() { return new Iwe7ColorsService(inject(INJECTOR)); }, token: Iwe7ColorsService, providedIn: "root" });
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
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
ZIndexService.ctorParameters = function () { return []; };
ZIndexService.ngInjectableDef = defineInjectable({ factory: function ZIndexService_Factory() { return new ZIndexService(); }, token: ZIndexService, providedIn: "root" });

export { ThemesModule, Iwe7ColorsService, ZIndexService };
//# sourceMappingURL=iwe7-core.js.map
