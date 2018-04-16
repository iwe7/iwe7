import { NgModule, Injectable, InjectionToken, Injector, defineInjectable, inject, INJECTOR } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ThemesModule {
}
ThemesModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const Iwe7Colors = new InjectionToken('Iwe7ThemesColors', {
    providedIn: 'root',
    factory: () => {
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
class Iwe7ColorsService {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getColor(key) {
        return (/** @type {?} */ (this.injector.get(Iwe7Colors))).get(key);
    }
    /**
     * @return {?}
     */
    getRandomColor() {
        return `#${`00000${((Math.random() * 0x1000000) << 0).toString(16)}`.substr(-6)}`;
    }
}
Iwe7ColorsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
Iwe7ColorsService.ctorParameters = () => [
    { type: Injector, },
];
/** @nocollapse */ Iwe7ColorsService.ngInjectableDef = defineInjectable({ factory: function Iwe7ColorsService_Factory() { return new Iwe7ColorsService(inject(INJECTOR)); }, token: Iwe7ColorsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ZIndexService {
    constructor() {
        this.index = 1000;
    }
    /**
     * @return {?}
     */
    getIndex() {
        return this.index++;
    }
}
ZIndexService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
ZIndexService.ctorParameters = () => [];
/** @nocollapse */ ZIndexService.ngInjectableDef = defineInjectable({ factory: function ZIndexService_Factory() { return new ZIndexService(); }, token: ZIndexService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { ThemesModule, Iwe7ColorsService, ZIndexService };
//# sourceMappingURL=iwe7-core.js.map
