/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { matchMedia } from './functions/match-media';
import * as i0 from "@angular/core";
import * as i1 from "../index";
export class MatchMediaService {
    /**
     * @param {?} mediaQuery
     * @return {?}
     */
    matchMedia(mediaQuery) {
        return matchMedia(mediaQuery);
    }
}
MatchMediaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */ MatchMediaService.ngInjectableDef = i0.defineInjectable({ factory: function MatchMediaService_Factory() { return new i1.MatchMediaService(); }, token: i1.MatchMediaService, providedIn: "root" });
function MatchMediaService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MatchMediaService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MatchMediaService.ctorParameters;
}
//# sourceMappingURL=match-media.service.js.map