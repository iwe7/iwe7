/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class ZIndexService {
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
/** @nocollapse */ ZIndexService.ngInjectableDef = i0.defineInjectable({ factory: function ZIndexService_Factory() { return new ZIndexService(); }, token: ZIndexService, providedIn: "root" });
function ZIndexService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ZIndexService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ZIndexService.ctorParameters;
    /** @type {?} */
    ZIndexService.prototype.index;
}
//# sourceMappingURL=z-index.service.js.map