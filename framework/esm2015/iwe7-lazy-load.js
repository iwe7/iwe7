import { NgModule, InjectionToken, Injectable, NgModuleFactoryLoader, NgModuleRef, Inject, defineInjectable, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ROUTES } from '@angular/router';
import { of, merge } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { flatten } from 'underscore';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Iwe7LazyLoadModule {
    /**
     * @param {?} lazyComponents
     * @return {?}
     */
    static forRoot(lazyComponents) {
        return {
            ngModule: Iwe7LazyLoadModule,
            providers: [
                {
                    provide: ROUTES,
                    useValue: lazyComponents,
                    multi: true
                }
            ]
        };
    }
}
Iwe7LazyLoadModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: []
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const LAZY_COMPONENTS = new InjectionToken('LAZY_COMPONENTS', {
    providedIn: 'root',
    factory: () => []
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const lazyComponentModule = new Map();
/**
 * 懒加载module factory
 */
class LazyComponentModuleFactory {
    /**
     * 构造器
     * @param {?} moduleFactoryLoader
     */
    constructor(moduleFactoryLoader) {
        this.moduleFactoryLoader = moduleFactoryLoader;
    }
    /**
     * 加载
     * @param {?} path
     * @return {?}
     */
    load(path) {
        return new Promise((resolve, reject) => {
            this.moduleFactoryLoader
                .load(path)
                .then(moduleFactory => {
                let /** @type {?} */ module = new LazyComponentModule(moduleFactory);
                lazyComponentModule.set(path, module);
                resolve(module);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    /**
     * 根据路径获取组件module
     * @param {?} path
     * @return {?}
     */
    getComponentModuleByPath(path) {
        let /** @type {?} */ cacheLazyComponentModule = lazyComponentModule.get(path);
        if (cacheLazyComponentModule) {
            return new Promise((resolve, reject) => {
                resolve(cacheLazyComponentModule);
            });
        }
        else {
            return this.load(path);
        }
    }
}
/**
 * @template T
 */
class LazyComponentModule {
    /**
     * @param {?} moduleFactory
     */
    constructor(moduleFactory) {
        this.moduleFactory = moduleFactory;
    }
    /**
     * @param {?} selector
     * @param {?=} injector
     * @return {?}
     */
    getComponent(selector, injector) {
        const /** @type {?} */ moduleRef = this.moduleFactory.create(injector);
        const /** @type {?} */ componentFactoryResolver = moduleRef.componentFactoryResolver;
        const /** @type {?} */ element = moduleRef.instance.getComponentByName(selector);
        return componentFactoryResolver.resolveComponentFactory(element);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LazyLoaderService {
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
        this.lazyComponentConfig = flatten(this.lazyComponentConfig);
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
            subs.push(this.createComponent(s, view));
        });
        return merge(...subs);
    }
    /**
     * @param {?} selector
     * @param {?} view
     * @return {?}
     */
    createComponent(selector, view) {
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
/** @nocollapse */ LazyLoaderService.ngInjectableDef = defineInjectable({ factory: function LazyLoaderService_Factory() { return new LazyLoaderService(inject(NgModuleFactoryLoader), inject(NgModuleRef), inject(LAZY_COMPONENTS)); }, token: LazyLoaderService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
class LazyComponentModuleBase {
}

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

export { Iwe7LazyLoadModule, LazyLoaderService, LazyComponentModuleBase, LazyComponentModule, LazyComponentModuleFactory, LAZY_COMPONENTS };
//# sourceMappingURL=iwe7-lazy-load.js.map
