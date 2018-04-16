/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, InjectionToken, Injector } from '@angular/core';
import * as i0 from "@angular/core";
export const /** @type {?} */ Iwe7Colors = new InjectionToken('Iwe7ThemesColors', {
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
export class Iwe7ColorsService {
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
/** @nocollapse */ Iwe7ColorsService.ngInjectableDef = i0.defineInjectable({ factory: function Iwe7ColorsService_Factory() { return new Iwe7ColorsService(i0.inject(i0.INJECTOR)); }, token: Iwe7ColorsService, providedIn: "root" });
function Iwe7ColorsService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    Iwe7ColorsService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    Iwe7ColorsService.ctorParameters;
    /** @type {?} */
    Iwe7ColorsService.prototype.injector;
}
//# sourceMappingURL=iwe7-colors.service.js.map