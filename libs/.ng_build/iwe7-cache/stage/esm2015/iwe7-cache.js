import { NgModule, Injectable, defineInjectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { map } from 'underscore';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CacheModule {
}
CacheModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
class CacheMemory {
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
        this.forEach((item, key, map$$1) => {
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
/**
 * @template T
 */
class CacheMemoryService extends CacheMemory {
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
/** @nocollapse */ CacheMemoryService.ngInjectableDef = defineInjectable({ factory: function CacheMemoryService_Factory() { return new CacheMemoryService(); }, token: CacheMemoryService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SubscribersService extends CacheMemory {
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
/** @nocollapse */ SubscribersService.ngInjectableDef = defineInjectable({ factory: function SubscribersService_Factory() { return new SubscribersService(); }, token: SubscribersService, providedIn: "root" });

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

export { CacheModule, CacheMemoryService, SubscribersService, CacheMemory as ɵa };
//# sourceMappingURL=iwe7-cache.js.map
