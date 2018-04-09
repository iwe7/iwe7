import { NgModule, InjectionToken, Injectable, NgModuleFactoryLoader, NgModuleRef, Inject, defineInjectable, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ROUTES } from '@angular/router';
import { of } from 'rxjs';
import { fromPromise } from 'rxjs/observable/fromPromise';

var Iwe7LazyLoadModule = /** @class */ (function () {
    function Iwe7LazyLoadModule() {
    }
    Iwe7LazyLoadModule.forRoot = function (lazyComponents) {
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
    };
    return Iwe7LazyLoadModule;
}());
Iwe7LazyLoadModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: []
            },] },
];
var LAZY_COMPONENTS = new InjectionToken('LAZY_COMPONENTS', {
    providedIn: 'root',
    factory: function () { return []; }
});
var lazyComponentModule = new Map();
var LazyComponentModuleFactory = /** @class */ (function () {
    function LazyComponentModuleFactory(moduleFactoryLoader) {
        this.moduleFactoryLoader = moduleFactoryLoader;
    }
    LazyComponentModuleFactory.prototype.load = function (path) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.moduleFactoryLoader
                .load(path)
                .then(function (moduleFactory) {
                var module = new LazyComponentModule(moduleFactory);
                lazyComponentModule.set(path, module);
                resolve(module);
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    LazyComponentModuleFactory.prototype.getComponentModuleByPath = function (path) {
        var cacheLazyComponentModule = lazyComponentModule.get(path);
        if (cacheLazyComponentModule) {
            return new Promise(function (resolve, reject) {
                resolve(cacheLazyComponentModule);
            });
        }
        else {
            return this.load(path);
        }
    };
    return LazyComponentModuleFactory;
}());
var LazyComponentModule = /** @class */ (function () {
    function LazyComponentModule(moduleFactory) {
        this.moduleFactory = moduleFactory;
    }
    LazyComponentModule.prototype.getComponent = function (selector, injector) {
        var moduleRef = this.moduleFactory.create(injector);
        var componentFactoryResolver = moduleRef.componentFactoryResolver;
        var element = moduleRef.instance.getComponentByName(selector);
        return componentFactoryResolver.resolveComponentFactory(element);
    };
    return LazyComponentModule;
}());
var LazyLoaderService = /** @class */ (function () {
    function LazyLoaderService(moduleFactoryLoader, moduleRef, lazyComponentConfig) {
        var _this = this;
        this.moduleFactoryLoader = moduleFactoryLoader;
        this.moduleRef = moduleRef;
        this.lazyComponentConfig = lazyComponentConfig;
        this.components = new Map();
        this.lazyComponentModuleFactory = new LazyComponentModuleFactory(this.moduleFactoryLoader);
        this.lazyComponentConfig.map(function (res) {
            _this.components.set(res.path, res.loadChildren);
        });
    }
    LazyLoaderService.prototype.init = function (element, view) {
        var _this = this;
        var selectors = Array.from(this.components.keys()).filter(function (s) { return element.querySelector(s); });
        if (!selectors.length) {
            return of(undefined);
        }
        return fromPromise(Promise.all(selectors.map(function (s) { return _this.create(s, view); })).then(function (result) { return undefined; }));
    };
    LazyLoaderService.prototype.create = function (selector, view) {
        var _this = this;
        var path = this.components.get(selector);
        return this.lazyComponentModuleFactory
            .getComponentModuleByPath(path)
            .then(function (res) {
            var instance = res.getComponent(selector, _this.moduleRef.injector);
            view.createComponent(instance);
        });
    };
    return LazyLoaderService;
}());
LazyLoaderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
LazyLoaderService.ctorParameters = function () { return [
    { type: NgModuleFactoryLoader, },
    { type: NgModuleRef, },
    { type: Array, decorators: [{ type: Inject, args: [LAZY_COMPONENTS,] },] },
]; };
LazyLoaderService.ngInjectableDef = defineInjectable({ factory: function LazyLoaderService_Factory() { return new LazyLoaderService(inject(NgModuleFactoryLoader), inject(NgModuleRef), inject(LAZY_COMPONENTS)); }, token: LazyLoaderService, providedIn: "root" });
var LazyComponentModuleBase = /** @class */ (function () {
    function LazyComponentModuleBase() {
    }
    return LazyComponentModuleBase;
}());

export { Iwe7LazyLoadModule, LazyLoaderService, LazyComponentModuleBase, LazyComponentModule, LazyComponentModuleFactory, LAZY_COMPONENTS };
//# sourceMappingURL=iwe7-lazy-load.js.map
