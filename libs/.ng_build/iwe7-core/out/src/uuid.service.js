/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../index";
export class UuidService {
    constructor() { }
    /**
     * @return {?}
     */
    get() {
        let /** @type {?} */ d = new Date().getTime();
        let /** @type {?} */ uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            let /** @type {?} */ r = ((d + Math.random() * 16) % 16) | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
        });
        return uuid;
    }
}
UuidService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
UuidService.ctorParameters = () => [];
/** @nocollapse */ UuidService.ngInjectableDef = i0.defineInjectable({ factory: function UuidService_Factory() { return new i1.UuidService(); }, token: i1.UuidService, providedIn: "root" });
function UuidService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    UuidService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    UuidService.ctorParameters;
}
//# sourceMappingURL=uuid.service.js.map