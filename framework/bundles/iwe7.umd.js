(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router'), require('rxjs'), require('rxjs/observable/fromPromise'), require('rxjs/operators')) :
	typeof define === 'function' && define.amd ? define('iwe7', ['exports', '@angular/core', '@angular/common', '@angular/router', 'rxjs', 'rxjs/observable/fromPromise', 'rxjs/operators'], factory) :
	(factory((global.iwe7 = {}),global.ng.core,global.ng.common,global.ng.router,global.rxjs,global.Rx.Observable,global.Rx.Observable.prototype));
}(this, (function (exports,core,common,router,rxjs,fromPromise,operators) { 'use strict';

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
        this.lazyComponentConfig.map(function (res) {
            _this.components.set(res.path, res.loadChildren);
        });
    }
    LazyLoaderService.prototype.init = function (element, view) {
        var _this = this;
        var selectors = Array.from(this.components.keys()).filter(function (s) { return element.querySelector(s); });
        if (!selectors.length) {
            return rxjs.of(undefined);
        }
        return fromPromise.fromPromise(Promise.all(selectors.map(function (s) { return _this.create(s, view); })).then(function (result) { return undefined; }));
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
var IcssModule = /** @class */ (function () {
    function IcssModule() {
    }
    return IcssModule;
}());
IcssModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule]
            },] },
];
var IcssService = /** @class */ (function () {
    function IcssService() {
        this.state = {};
    }
    IcssService.prototype.init = function (ob, ele) {
        var _this = this;
        var obs = [];
        var _loop_1 = function (key) {
            var newOb = ob[key].pipe(operators.map(function (res) {
                return _a = {}, _a["" + key] = res, _a;
                var _a;
            }));
            obs.push(newOb);
        };
        for (var key in ob) {
            _loop_1(key);
        }
        var mer = rxjs.merge.apply(void 0, __spread(obs)).pipe(operators.scan(function (state, style) {
            return Object.assign({}, state, style);
        }, {}), operators.map(function (style) {
            _this.styledash(ele.nativeElement).set(style);
            return style;
        }));
        mer.pipe(operators.first()).subscribe(function (res) {
            _this.state = res;
        });
        mer.subscribe(function (res) { });
        return mer;
    };
    IcssService.prototype.getState = function (key) {
        if (!!key) {
            return this.state[key] || {};
        }
        return this.state;
    };
    IcssService.prototype.parse = function (val) {
        return typeof val === 'boolean' ? (!!val ? 1 : 0) : val;
    };
    IcssService.prototype.styledash = function (target) {
        var _this = this;
        return {
            set: function (key, val) {
                if (typeof key === 'object' && val === undefined) {
                    return Object.keys(key).forEach(function (subKey) { return _this.styledash(target).set(subKey, key[subKey]); });
                }
                if (typeof val === 'object') {
                    return Object.keys(val).forEach(function (subkey) {
                        _this.styledash(target).set(key + "-" + subkey, val[subkey]);
                    });
                }
                return target.style.setProperty("--" + key, (_this.parse(val)));
            },
            get: function (key) { return target.style.getPropertyValue("--" + key); }
        };
    };
    return IcssService;
}());
IcssService.decorators = [
    { type: core.Injectable, args: [{
                providedIn: 'root'
            },] },
];
IcssService.ctorParameters = function () { return []; };
IcssService.ngInjectableDef = core.defineInjectable({ factory: function IcssService_Factory() { return new IcssService(); }, token: IcssService, providedIn: "root" });
var Iwe7CoreModule = /** @class */ (function () {
    function Iwe7CoreModule() {
    }
    return Iwe7CoreModule;
}());
Iwe7CoreModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [],
                exports: [],
                entryComponents: []
            },] },
];
var BaseComponent = /** @class */ (function () {
    function BaseComponent(cd) {
        this.cd = cd;
        this.props = new rxjs.Observable();
        this.needDestory = false;
    }
    BaseComponent.prototype.ngOnChanges = function (changes) {
        if ('props' in changes) {
            if (!changes['props'].isFirstChange) {
                this.__propsHandler();
            }
        }
    };
    BaseComponent.prototype.ngOnDestroy = function () {
        this.needDestory = true;
    };
    BaseComponent.prototype.ngOnInit = function () {
        this.__propsHandler();
    };
    BaseComponent.prototype.setProps = function (props) {
        this.props = rxjs.merge(this.props, props);
        this.__propsHandler();
    };
    BaseComponent.prototype.__propsHandler = function () {
        var _this = this;
        this.props = rxjs.merge(this.props.pipe(operators.first(function (val, idx) { return idx === 0; }, {})), this.props).pipe(operators.filter(function (val) { return Object.keys(val).length > 0; }), operators.takeWhile(function (val) { return !_this.needDestory; }));
        this.props.subscribe(function (res) {
            _this.cd.markForCheck();
        });
    };
    return BaseComponent;
}());
BaseComponent.propDecorators = {
    "props": [{ type: core.Input },],
};

exports.Iwe7LazyLoadModule = Iwe7LazyLoadModule;
exports.LazyLoaderService = LazyLoaderService;
exports.LazyComponentModuleBase = LazyComponentModuleBase;
exports.LazyComponentModule = LazyComponentModule;
exports.LazyComponentModuleFactory = LazyComponentModuleFactory;
exports.LAZY_COMPONENTS = LAZY_COMPONENTS;
exports.IcssModule = IcssModule;
exports.IcssService = IcssService;
exports.Iwe7CoreModule = Iwe7CoreModule;
exports.BaseComponent = BaseComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=iwe7.umd.js.map
