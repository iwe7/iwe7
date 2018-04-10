import { __spread, __extends } from 'tslib';
import { NgModule, InjectionToken, Injectable, NgModuleFactoryLoader, NgModuleRef, Inject, Directive, ViewContainerRef, Input, TemplateRef, Renderer2, defineInjectable, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ROUTES } from '@angular/router';
import { of, merge, Observable } from 'rxjs';
import { tap, map, scan, first, filter, takeWhile } from 'rxjs/operators';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { flatten, map as map$1 } from 'underscore';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { LazyLoaderService } from 'iwe7/lazy-load';
import { Iwe7Base } from 'iwe7-core';

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
var LazyLoaderService$1 = /** @class */ (function () {
    function LazyLoaderService$1(moduleFactoryLoader, moduleRef, lazyComponentConfig) {
        var _this = this;
        this.moduleFactoryLoader = moduleFactoryLoader;
        this.moduleRef = moduleRef;
        this.lazyComponentConfig = lazyComponentConfig;
        this.components = new Map();
        this.lazyComponentModuleFactory = new LazyComponentModuleFactory(this.moduleFactoryLoader);
        this.lazyComponentConfig = flatten(this.lazyComponentConfig);
        this.lazyComponentConfig.map(function (res) {
            _this.components.set(res.selector, res.loadChildren);
        });
    }
    LazyLoaderService$1.prototype.init = function (element, view) {
        var _this = this;
        var selectors = Array.from(this.components.keys()).filter(function (s) { return element.querySelector(s); });
        if (!selectors.length) {
            return of(undefined);
        }
        var subs = [];
        selectors.forEach(function (s) {
            subs.push(_this.createComponent(s, view));
        });
        return merge.apply(void 0, __spread(subs));
    };
    LazyLoaderService$1.prototype.createComponent = function (selector, view) {
        var _this = this;
        var path = this.components.get(selector);
        return fromPromise(this.lazyComponentModuleFactory.getComponentModuleByPath(path)).pipe(map(function (res) {
            var instance = res.getComponent(selector, _this.moduleRef.injector);
            return instance;
        }), tap(function (instance) {
            view.createComponent(instance);
        }));
    };
    return LazyLoaderService$1;
}());
LazyLoaderService$1.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
LazyLoaderService$1.ctorParameters = function () { return [
    { type: NgModuleFactoryLoader, },
    { type: NgModuleRef, },
    { type: Array, decorators: [{ type: Inject, args: [LAZY_COMPONENTS,] },] },
]; };
LazyLoaderService$1.ngInjectableDef = defineInjectable({ factory: function LazyLoaderService_Factory() { return new LazyLoaderService$1(inject(NgModuleFactoryLoader), inject(NgModuleRef), inject(LAZY_COMPONENTS)); }, token: LazyLoaderService$1, providedIn: "root" });
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
var GetViewRefDirective = /** @class */ (function () {
    function GetViewRefDirective(view) {
        this.view = view;
    }
    return GetViewRefDirective;
}());
GetViewRefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[getViewRef]',
                exportAs: 'getViewRef'
            },] },
];
GetViewRefDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
var Iwe7CoreModule = /** @class */ (function () {
    function Iwe7CoreModule() {
    }
    return Iwe7CoreModule;
}());
Iwe7CoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [GetViewRefDirective],
                exports: [GetViewRefDirective],
                entryComponents: []
            },] },
];
var Iwe7Base$1 = /** @class */ (function () {
    function Iwe7Base$1(cd) {
        this.cd = cd;
        this.props = new Observable();
        this.needDestory = false;
    }
    Iwe7Base$1.prototype.ngOnChanges = function (changes) {
        if ('props' in changes) {
            if (!changes['props'].isFirstChange) {
                this.__propsHandler();
            }
        }
    };
    Iwe7Base$1.prototype.ngOnDestroy = function () {
        this.needDestory = true;
    };
    Iwe7Base$1.prototype.ngOnInit = function () {
        this.__propsHandler();
    };
    Iwe7Base$1.prototype.setProps = function (props) {
        this.props = merge(this.props, props);
        this.__propsHandler();
    };
    Iwe7Base$1.prototype.__propsHandler = function () {
        var _this = this;
        this.props = merge(this.props.pipe(first(function (val, idx) { return idx === 0; }, ({}))), this.props).pipe(filter(function (val) { return Object.keys(val).length > 0; }), takeWhile(function (val) { return !_this.needDestory; }));
        this.props.subscribe(function (res) {
            _this.onPropsChange(res);
            _this.cd.markForCheck();
        });
    };
    return Iwe7Base$1;
}());
Iwe7Base$1.propDecorators = {
    "props": [{ type: Input },],
};
var Iwe7DesignDirective = /** @class */ (function () {
    function Iwe7DesignDirective(_viewContainerRef, template, renderer2, lazyloador) {
        this._viewContainerRef = _viewContainerRef;
        this.template = template;
        this.renderer2 = renderer2;
        this.lazyloador = lazyloador;
        this.designSetting = false;
        this.designDebug = false;
        this.viewContainerRef = _viewContainerRef;
    }
    Iwe7DesignDirective.prototype.ngOnInit = function () {
        if (this.designDebug) {
        }
    };
    Iwe7DesignDirective.prototype.ngOnChanges = function (changes) {
        if ('design' in changes) {
            this.createComponent();
        }
    };
    Iwe7DesignDirective.prototype.createComponent = function () {
        this.viewContainerRef.clear();
        var name = this.design.name || null;
        this.lazyloador.createComponent(name, this._viewContainerRef).subscribe(function (res) { });
    };
    Iwe7DesignDirective.prototype.setStyle = function (ele) {
        var _this = this;
        map$1(this.design.style, function (s, key) {
            _this.renderer2.setStyle(ele, '' + key, s);
        });
    };
    Iwe7DesignDirective.prototype.setDrag = function (instance) {
        var ele = instance.ele.nativeElement;
        this.etAttribute({
            draggable: true
        }, ele);
        var uuid;
        fromEvent(ele, 'dragstart').subscribe(function (ev) {
            uuid = instance.id;
            ev.dataTransfer.setData('name', 'guid_' + instance.guid);
            ev.stopPropagation();
        });
        fromEvent(ele, 'dragend').subscribe(function (ev) {
            console.log(ele);
        });
    };
    Iwe7DesignDirective.prototype.setDrop = function (instance) {
        var ele = instance.ele.nativeElement;
        fromEvent(ele, 'drop').subscribe(function (ev) { });
    };
    Iwe7DesignDirective.prototype.etAttribute = function (classObj, ele) {
        if (!ele) {
            return '';
        }
        for (var key in classObj) {
            if (typeof classObj[key] === 'boolean') {
                if (classObj[key]) {
                    this.renderer2.setAttribute(ele, key, 'true');
                }
                else {
                    this.renderer2.removeAttribute(ele, key);
                }
            }
            else {
                this.renderer2.setAttribute(ele, key, classObj[key]);
            }
        }
    };
    return Iwe7DesignDirective;
}());
Iwe7DesignDirective.decorators = [
    { type: Directive, args: [{
                selector: '[iwe7Design],[design],[designClass],[designStyle],[designDrag],[designDrop],[designInstance]'
            },] },
];
Iwe7DesignDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
    { type: TemplateRef, },
    { type: Renderer2, },
    { type: LazyLoaderService, },
]; };
Iwe7DesignDirective.propDecorators = {
    "design": [{ type: Input },],
    "designClass": [{ type: Input },],
    "designStyle": [{ type: Input },],
    "designDrag": [{ type: Input },],
    "designDrop": [{ type: Input },],
    "designSetting": [{ type: Input },],
    "designDebug": [{ type: Input },],
};
var Iwe7DesignModule = /** @class */ (function () {
    function Iwe7DesignModule() {
    }
    return Iwe7DesignModule;
}());
Iwe7DesignModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [Iwe7DesignDirective]
            },] },
];
var Iwe7DesignBase = /** @class */ (function (_super) {
    __extends(Iwe7DesignBase, _super);
    function Iwe7DesignBase(cd) {
        return _super.call(this, cd) || this;
    }
    return Iwe7DesignBase;
}(Iwe7Base));

export { Iwe7LazyLoadModule, LazyLoaderService$1 as LazyLoaderService, LazyComponentModuleBase, LazyComponentModule, LazyComponentModuleFactory, LAZY_COMPONENTS, IcssModule, IcssService, Iwe7CoreModule, Iwe7Base$1 as Iwe7Base, GetViewRefDirective, Iwe7DesignModule, Iwe7DesignBase, Iwe7DesignDirective as ɵa };
//# sourceMappingURL=iwe7.js.map
