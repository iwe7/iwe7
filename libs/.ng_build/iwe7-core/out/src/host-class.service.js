/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, Renderer2, Injector } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../index";
export class HostClassService {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        this.classMap = {};
    }
    /**
     * @param {?} el
     * @param {?} classMap
     * @return {?}
     */
    updateHostClass(el, classMap) {
        this.renderer = this.injector.get(Renderer2, null);
        if (this.renderer) {
            this.removeClass(el, this.classMap, this.renderer);
            this.classMap = Object.assign({}, classMap);
            this.addClass(el, this.classMap, this.renderer);
        }
    }
    /**
     * @param {?} el
     * @param {?} classMap
     * @param {?} renderer
     * @return {?}
     */
    removeClass(el, classMap, renderer) {
        for (const /** @type {?} */ i in classMap) {
            if (classMap.hasOwnProperty(i)) {
                renderer.removeClass(el, i);
            }
        }
    }
    /**
     * @param {?} el
     * @param {?} classMap
     * @param {?} renderer
     * @return {?}
     */
    addClass(el, classMap, renderer) {
        for (const /** @type {?} */ i in classMap) {
            if (classMap.hasOwnProperty(i)) {
                if (classMap[i]) {
                    renderer.addClass(el, i);
                }
            }
        }
    }
}
HostClassService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
HostClassService.ctorParameters = () => [
    { type: Injector, },
];
/** @nocollapse */ HostClassService.ngInjectableDef = i0.defineInjectable({ factory: function HostClassService_Factory() { return new i1.HostClassService(i0.inject(i0.INJECTOR)); }, token: i1.HostClassService, providedIn: "root" });
function HostClassService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    HostClassService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    HostClassService.ctorParameters;
    /** @type {?} */
    HostClassService.prototype.classMap;
    /** @type {?} */
    HostClassService.prototype.renderer;
    /** @type {?} */
    HostClassService.prototype.injector;
}
//# sourceMappingURL=host-class.service.js.map