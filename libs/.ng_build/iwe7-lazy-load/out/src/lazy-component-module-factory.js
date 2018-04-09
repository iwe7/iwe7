/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ lazyComponentModule = new Map();
/**
 * 懒加载module factory
 */
export class LazyComponentModuleFactory {
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
function LazyComponentModuleFactory_tsickle_Closure_declarations() {
    /** @type {?} */
    LazyComponentModuleFactory.prototype.moduleFactoryLoader;
}
/**
 * @template T
 */
export class LazyComponentModule {
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
function LazyComponentModule_tsickle_Closure_declarations() {
    /** @type {?} */
    LazyComponentModule.prototype.moduleFactory;
}
//# sourceMappingURL=lazy-component-module-factory.js.map