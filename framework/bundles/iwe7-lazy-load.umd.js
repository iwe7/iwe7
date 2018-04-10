(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router'), require('rxjs'), require('rxjs/operators'), require('rxjs/observable/fromPromise'), require('underscore')) :
	typeof define === 'function' && define.amd ? define('iwe7/lazy-load', ['exports', '@angular/core', '@angular/common', '@angular/router', 'rxjs', 'rxjs/operators', 'rxjs/observable/fromPromise', 'underscore'], factory) :
	(factory((global.iwe7 = global.iwe7 || {}, global.iwe7['lazy-load'] = {}),global.ng.core,global.ng.common,global.ng.router,global.rxjs,global.Rx.Observable.prototype,global.Rx.Observable,global.underscore));
}(this, (function (exports,core,common,router,rxjs,operators,fromPromise,underscore) { 'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */










function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var Iwe7LazyLoadModule = /** @class */ (function () {
    function Iwe7LazyLoadModule() {
    }
    Iwe7LazyLoadModule.forRoot = function (lazyComponents) {
        return {
            ngModule: Iwe7LazyLoadModule,
            providers: [
                {
                    provide: router.ROUTES,
                    useValue: lazyComponents,
                    multi: true
                }
            ]
        };
    };
    return Iwe7LazyLoadModule;
}());
Iwe7LazyLoadModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: []
            },] },
];
var LAZY_COMPONENTS = new core.InjectionToken('LAZY_COMPONENTS', {
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
        this.lazyComponentConfig = underscore.flatten(this.lazyComponentConfig);
        this.lazyComponentConfig.map(function (res) {
            _this.components.set(res.selector, res.loadChildren);
        });
    }
    LazyLoaderService.prototype.init = function (element, view) {
        var _this = this;
        var selectors = Array.from(this.components.keys()).filter(function (s) { return element.querySelector(s); });
        if (!selectors.length) {
            return rxjs.of(undefined);
        }
        var subs = [];
        selectors.forEach(function (s) {
            subs.push(_this.createComponent(s, view));
        });
        return rxjs.merge.apply(void 0, __spread(subs));
    };
    LazyLoaderService.prototype.createComponent = function (selector, view) {
        var _this = this;
        var path = this.components.get(selector);
        return fromPromise.fromPromise(this.lazyComponentModuleFactory.getComponentModuleByPath(path)).pipe(operators.map(function (res) {
            var instance = res.getComponent(selector, _this.moduleRef.injector);
            return instance;
        }), operators.tap(function (instance) {
            view.createComponent(instance);
        }));
    };
    return LazyLoaderService;
}());
LazyLoaderService.decorators = [
    { type: core.Injectable, args: [{
                providedIn: 'root'
            },] },
];
LazyLoaderService.ctorParameters = function () { return [
    { type: core.NgModuleFactoryLoader, },
    { type: core.NgModuleRef, },
    { type: Array, decorators: [{ type: core.Inject, args: [LAZY_COMPONENTS,] },] },
]; };
LazyLoaderService.ngInjectableDef = core.defineInjectable({ factory: function LazyLoaderService_Factory() { return new LazyLoaderService(core.inject(core.NgModuleFactoryLoader), core.inject(core.NgModuleRef), core.inject(LAZY_COMPONENTS)); }, token: LazyLoaderService, providedIn: "root" });
var LazyComponentModuleBase = /** @class */ (function () {
    function LazyComponentModuleBase() {
    }
    return LazyComponentModuleBase;
}());

exports.Iwe7LazyLoadModule = Iwe7LazyLoadModule;
exports.LazyLoaderService = LazyLoaderService;
exports.LazyComponentModuleBase = LazyComponentModuleBase;
exports.LazyComponentModule = LazyComponentModule;
exports.LazyComponentModuleFactory = LazyComponentModuleFactory;
exports.LAZY_COMPONENTS = LAZY_COMPONENTS;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=iwe7-lazy-load.umd.js.map
