import { __spread } from 'tslib';
import { NgModule, InjectionToken, Injectable, NgModuleFactoryLoader, NgModuleRef, Inject, Input, defineInjectable, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ROUTES } from '@angular/router';
import { of, merge, Observable } from 'rxjs';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { map, scan, first, filter, takeWhile } from 'rxjs/operators';

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
var IcssModule = /** @class */ (function () {
    function IcssModule() {
    }
    return IcssModule;
}());
IcssModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule]
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
            var newOb = ob[key].pipe(map(function (res) {
                return _a = {}, _a["" + key] = res, _a;
                var _a;
            }));
            obs.push(newOb);
        };
        for (var key in ob) {
            _loop_1(key);
        }
        var mer = merge.apply(void 0, __spread(obs)).pipe(scan(function (state, style) {
            return Object.assign({}, state, style);
        }, {}), map(function (style) {
            _this.styledash(ele.nativeElement).set(style);
            return style;
        }));
        mer.pipe(first()).subscribe(function (res) {
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
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
IcssService.ctorParameters = function () { return []; };
IcssService.ngInjectableDef = defineInjectable({ factory: function IcssService_Factory() { return new IcssService(); }, token: IcssService, providedIn: "root" });
var Iwe7CoreModule = /** @class */ (function () {
    function Iwe7CoreModule() {
    }
    return Iwe7CoreModule;
}());
Iwe7CoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [],
                exports: [],
                entryComponents: []
            },] },
];
var BaseComponent = /** @class */ (function () {
    function BaseComponent(cd) {
        this.cd = cd;
        this.props = new Observable();
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
        this.props = merge(this.props, props);
        this.__propsHandler();
    };
    BaseComponent.prototype.__propsHandler = function () {
        var _this = this;
        this.props = merge(this.props.pipe(first(function (val, idx) { return idx === 0; }, {})), this.props).pipe(filter(function (val) { return Object.keys(val).length > 0; }), takeWhile(function (val) { return !_this.needDestory; }));
        this.props.subscribe(function (res) {
            _this.cd.markForCheck();
        });
    };
    return BaseComponent;
}());
BaseComponent.propDecorators = {
    "props": [{ type: Input },],
};

export { Iwe7LazyLoadModule, LazyLoaderService, LazyComponentModuleBase, LazyComponentModule, LazyComponentModuleFactory, LAZY_COMPONENTS, IcssModule, IcssService, Iwe7CoreModule, BaseComponent };
//# sourceMappingURL=iwe7.js.map
