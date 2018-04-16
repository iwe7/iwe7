/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CacheMemory } from './chache-memory.service';
import * as i0 from "@angular/core";
export class SubscribersService extends CacheMemory {
    constructor() {
        super();
        this.desc = '大家好我是，subscribers service，我服保存订阅';
    }
    /**
     * @param {?} key
     * @return {?}
     */
    unsubscribe(key) {
        let /** @type {?} */ sub = this.get(key);
        if (sub && sub['unsubscribe']) {
            sub.unsubscribe();
        }
    }
    /**
     * @param {?} key
     * @param {?} subscribtion
     * @return {?}
     */
    addSub(key, subscribtion) {
        this.unsubscribe(key);
        this.set(key, subscribtion);
        return this;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    destory(key) {
        this.unsubscribe(key);
        this.delete(key);
    }
}
SubscribersService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
SubscribersService.ctorParameters = () => [];
/** @nocollapse */ SubscribersService.ngInjectableDef = i0.defineInjectable({ factory: function SubscribersService_Factory() { return new SubscribersService(); }, token: SubscribersService, providedIn: "root" });
function SubscribersService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SubscribersService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SubscribersService.ctorParameters;
    /** @type {?} */
    SubscribersService.prototype.desc;
}
//# sourceMappingURL=subscribers.service.js.map