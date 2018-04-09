/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, NgModuleFactoryLoader, NgModuleRef, Inject } from '@angular/core';
import { of, merge } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { LAZY_COMPONENTS } from './token';
import { LazyComponentModuleFactory } from './lazy-component-module-factory';
import * as _ from 'underscore';
import * as i0 from "@angular/core";
import * as i1 from "./token";
export class LazyLoaderService {
    /**
     * @param {?} moduleFactoryLoader
     * @param {?} moduleRef
     * @param {?} lazyComponentConfig
     */
    constructor(moduleFactoryLoader, moduleRef, lazyComponentConfig) {
        this.moduleFactoryLoader = moduleFactoryLoader;
        this.moduleRef = moduleRef;
        this.lazyComponentConfig = lazyComponentConfig;
        // 组件库
        this.components = new Map();
        this.lazyComponentModuleFactory = new LazyComponentModuleFactory(this.moduleFactoryLoader);
        this.lazyComponentConfig = _.flatten(this.lazyComponentConfig);
        this.lazyComponentConfig.map(res => {
            this.components.set(res.selector, res.loadChildren);
        });
    }
    /**
     * @param {?} element
     * @param {?} view
     * @return {?}
     */
    init(element, view) {
        const /** @type {?} */ selectors = Array.from(this.components.keys()).filter(s => element.querySelector(s));
        if (!selectors.length) {
            return of(undefined);
        }
        let /** @type {?} */ subs = [];
        selectors.forEach(s => {
            subs.push(this.create(s, view));
        });
        return merge(...subs);
    }
    /**
     * @param {?} selector
     * @param {?} view
     * @return {?}
     */
    create(selector, view) {
        let /** @type {?} */ path = this.components.get(selector);
        return fromPromise(this.lazyComponentModuleFactory.getComponentModuleByPath(path)).pipe(map(res => {
            let /** @type {?} */ instance = res.getComponent(selector, this.moduleRef.injector);
            return instance;
        }), tap(instance => {
            view.createComponent(instance);
        }));
    }
}
LazyLoaderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
LazyLoaderService.ctorParameters = () => [
    { type: NgModuleFactoryLoader, },
    { type: NgModuleRef, },
    { type: Array, decorators: [{ type: Inject, args: [LAZY_COMPONENTS,] },] },
];
/** @nocollapse */ LazyLoaderService.ngInjectableDef = i0.defineInjectable({ factory: function LazyLoaderService_Factory() { return new LazyLoaderService(i0.inject(i0.NgModuleFactoryLoader), i0.inject(i0.NgModuleRef), i0.inject(i1.LAZY_COMPONENTS)); }, token: LazyLoaderService, providedIn: "root" });
function LazyLoaderService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LazyLoaderService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LazyLoaderService.ctorParameters;
    /** @type {?} */
    LazyLoaderService.prototype.components;
    /** @type {?} */
    LazyLoaderService.prototype.lazyComponentModuleFactory;
    /** @type {?} */
    LazyLoaderService.prototype.moduleFactoryLoader;
    /** @type {?} */
    LazyLoaderService.prototype.moduleRef;
    /** @type {?} */
    LazyLoaderService.prototype.lazyComponentConfig;
}
//# sourceMappingURL=lazy-loader.js.map