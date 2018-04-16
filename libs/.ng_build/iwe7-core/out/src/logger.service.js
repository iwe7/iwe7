/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Inject, Injectable, InjectionToken, isDevMode } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../index";
export class LoggerService {
    /**
     * @param {?} isShow
     */
    constructor(isShow) {
        this.isShow = isShow;
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    log(...args) {
        if (isDevMode() && this.isShow) {
            console.log.apply(console, arguments);
        }
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    warn(...args) {
        if (isDevMode() && this.isShow) {
            console.warn.apply(console, arguments);
        }
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    error(...args) {
        if (isDevMode() && this.isShow) {
            console.error.apply(console, arguments);
        }
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    info(...args) {
        if (isDevMode() && this.isShow) {
            console.log.apply(console, arguments);
        }
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    debug(...args) {
        if (isDevMode() && this.isShow) {
            const /** @type {?} */ arrs = Array.prototype.slice.call(arguments);
            console.log.apply(console, ['[DEBUG]'].concat(arrs));
        }
    }
}
LoggerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
LoggerService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [IWE7_LOGGER_SHOW,] },] },
];
/** @nocollapse */ LoggerService.ngInjectableDef = i0.defineInjectable({ factory: function LoggerService_Factory() { return new i1.LoggerService(i0.inject(i1.IWE7_LOGGER_SHOW)); }, token: i1.LoggerService, providedIn: "root" });
function LoggerService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LoggerService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LoggerService.ctorParameters;
    /** @type {?} */
    LoggerService.prototype.isShow;
}
/**
 * @return {?}
 */
export function iwe7LoggerShow() {
    return true;
}
export const /** @type {?} */ IWE7_LOGGER_SHOW = new InjectionToken('IWE7_LOGGER_SHOW', {
    providedIn: 'root',
    factory: iwe7LoggerShow
});
//# sourceMappingURL=logger.service.js.map