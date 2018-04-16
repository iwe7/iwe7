/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'underscore';
import * as i0 from "@angular/core";
/**
 * @abstract
 * @template T
 */
export class CacheMemory {
    constructor() {
        this.data = new Map();
        this.data$ = new Subject();
    }
    /**
     * @return {?}
     */
    onChange() {
        return this.data$;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    init(data) {
        this.data = new Map(data);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    get(key) {
        return this.data.get(key) || {};
    }
    /**
     * @param {?} key
     * @param {?} val
     * @return {?}
     */
    set(key, val) {
        this.data.set(key, val);
        this.data$.next(this.data);
        return this;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    delete(key) {
        this.data.delete(key);
        this.data$.next(this.data);
        return this;
    }
    /**
     * @return {?}
     */
    clear() {
        this.data.clear();
        this.data$.next(this.data);
        return this;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    has(key) {
        return this.data.has(key);
    }
    /**
     * @param {?} callbackfn
     * @return {?}
     */
    forEach(callbackfn) {
        this.data.forEach(callbackfn);
        return this;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    saveToLocalStorage(key) {
        let /** @type {?} */ data = {};
        this.forEach((item, key, map) => {
            data[key] = item;
        });
        localStorage.setItem(key, JSON.stringify(data));
    }
    /**
     * @param {?} key
     * @return {?}
     */
    initFromLoacalStorage(key) {
        let /** @type {?} */ item = localStorage.getItem(key);
        if (!!item) {
            item = JSON.parse(item);
            let /** @type {?} */ data = map(item, (item, key) => {
                return [key + '', item];
            });
            this.data = new Map(data);
            return this;
        }
    }
}
function CacheMemory_tsickle_Closure_declarations() {
    /** @type {?} */
    CacheMemory.prototype.data;
    /** @type {?} */
    CacheMemory.prototype.data$;
}
/**
 * @template T
 */
export class CacheMemoryService extends CacheMemory {
    constructor() {
        super();
        this.name = '大家好，我是cache memory service，你能把临时数据交给我保存！';
    }
}
CacheMemoryService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
CacheMemoryService.ctorParameters = () => [];
/** @nocollapse */ CacheMemoryService.ngInjectableDef = i0.defineInjectable({ factory: function CacheMemoryService_Factory() { return new CacheMemoryService(); }, token: CacheMemoryService, providedIn: "root" });
function CacheMemoryService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    CacheMemoryService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    CacheMemoryService.ctorParameters;
    /** @type {?} */
    CacheMemoryService.prototype.name;
}
//# sourceMappingURL=chache-memory.service.js.map