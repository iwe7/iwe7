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
class LazyLoaderService$1 {
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
LazyLoaderService$1.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
LazyLoaderService$1.ctorParameters = () => [
    { type: NgModuleFactoryLoader, },
    { type: NgModuleRef, },
    { type: Array, decorators: [{ type: Inject, args: [LAZY_COMPONENTS,] },] },
];
/** @nocollapse */ LazyLoaderService$1.ngInjectableDef = defineInjectable({ factory: function LazyLoaderService_Factory() { return new LazyLoaderService$1(inject(NgModuleFactoryLoader), inject(NgModuleRef), inject(LAZY_COMPONENTS)); }, token: LazyLoaderService$1, providedIn: "root" });

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
class IcssModule {
}
IcssModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */

class IcssService {
    constructor() {
        this.state = {};
    }
    /**
     * @param {?} ob
     * @param {?=} ele
     * @return {?}
     */
    init(ob, ele) {
        const /** @type {?} */ obs = [];
        for (const /** @type {?} */ key in ob) {
            const /** @type {?} */ newOb = ob[key].pipe(map(res => {
                return {
                    [`${key}`]: res
                };
            }));
            obs.push(newOb);
        }
        // 合并流
        const /** @type {?} */ mer = merge(...obs).pipe(scan((state, style) => {
            return Object.assign({}, state, style);
        }, {}), map(style => {
            this.styledash(ele.nativeElement).set(style);
            return style;
        }));
        mer.pipe(first()).subscribe(res => {
            this.state = res;
        });
        mer.subscribe(res => { });
        return mer;
    }
    /**
     * @param {?=} key
     * @return {?}
     */
    getState(key) {
        if (!!key) {
            return this.state[key] || {};
        }
        return this.state;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    parse(val) {
        return typeof val === 'boolean' ? (!!val ? 1 : 0) : val;
    }
    /**
     * @param {?} target
     * @return {?}
     */
    styledash(target) {
        return {
            set: (key, val) => {
                if (typeof key === 'object' && val === undefined) {
                    return Object.keys(key).forEach(subKey => this.styledash(target).set(subKey, key[subKey]));
                }
                if (typeof val === 'object') {
                    return Object.keys(val).forEach(subkey => {
                        this.styledash(target).set(`${key}-${subkey}`, val[subkey]);
                    });
                }
                return target.style.setProperty(`--${key}`, /** @type {?} */ (this.parse(val)));
            },
            get: key => target.style.getPropertyValue(`--${key}`)
        };
    }
}
IcssService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
IcssService.ctorParameters = () => [];
/** @nocollapse */ IcssService.ngInjectableDef = defineInjectable({ factory: function IcssService_Factory() { return new IcssService(); }, token: IcssService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class GetViewRefDirective {
    /**
     * @param {?} view
     */
    constructor(view) {
        this.view = view;
    }
}
GetViewRefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[getViewRef]',
                exportAs: 'getViewRef'
            },] },
];
/** @nocollapse */
GetViewRefDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Iwe7CoreModule {
}
Iwe7CoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [GetViewRefDirective],
                exports: [GetViewRefDirective],
                entryComponents: []
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
class Iwe7Base$1 {
    /**
     * @param {?} cd
     */
    constructor(cd) {
        this.cd = cd;
        this.props = new Observable();
        // 需要注销开关
        this.needDestory = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if ('props' in changes) {
            if (!changes['props'].isFirstChange) {
                this.__propsHandler();
            }
        }
    }
    /**
     * 注销
     * @return {?}
     */
    ngOnDestroy() {
        this.needDestory = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.__propsHandler();
    }
    /**
     * @param {?} props
     * @return {?}
     */
    setProps(props) {
        this.props = merge(this.props, props);
        this.__propsHandler();
    }
    /**
     * @return {?}
     */
    __propsHandler() {
        this.props = merge(
        // 添加默认值
        this.props.pipe(first((val, idx) => idx === 0, /** @type {?} */ ({}))), this.props).pipe(
        // 去除{}
        filter(val => Object.keys(val).length > 0),
        // 自动注销
        takeWhile(val => !this.needDestory));
        this.props.subscribe(res => {
            this.onPropsChange(res);
            this.cd.markForCheck();
        });
    }
}
Iwe7Base$1.propDecorators = {
    "props": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * design="name;class 'class';style 'style';drag true; drop true;"
 */

class Iwe7DesignDirective {
    /**
     * @param {?} _viewContainerRef
     * @param {?} template
     * @param {?} renderer2
     * @param {?} lazyloador
     */
    constructor(_viewContainerRef, template, renderer2, lazyloador) {
        this._viewContainerRef = _viewContainerRef;
        this.template = template;
        this.renderer2 = renderer2;
        this.lazyloador = lazyloador;
        this.designSetting = false;
        this.designDebug = false;
        this.viewContainerRef = _viewContainerRef;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.designDebug) {
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if ('design' in changes) {
            this.createComponent();
        }
    }
    /**
     * @return {?}
     */
    createComponent() {
        this.viewContainerRef.clear();
        let /** @type {?} */ name = this.design.name || null;
        this.lazyloador.createComponent(name, this._viewContainerRef).subscribe(res => { });
    }
    /**
     * @param {?} ele
     * @return {?}
     */
    setStyle(ele) {
        map$1(this.design.style, (s, key) => {
            this.renderer2.setStyle(ele, '' + key, s);
        });
    }
    /**
     * @param {?} instance
     * @return {?}
     */
    setDrag(instance) {
        let /** @type {?} */ ele = instance.ele.nativeElement;
        this.etAttribute({
            draggable: true
        }, ele);
        let /** @type {?} */ uuid;
        fromEvent(ele, 'dragstart').subscribe((ev) => {
            uuid = instance.id;
            ev.dataTransfer.setData('name', 'guid_' + instance.guid);
            ev.stopPropagation();
        });
        fromEvent(ele, 'dragend').subscribe((ev) => {
            // dragend 删除这一个
            // this.history.removeComponentByUuid(uuid);
            console.log(ele);
        });
    }
    /**
     * @param {?} instance
     * @return {?}
     */
    setDrop(instance) {
        const /** @type {?} */ ele = instance.ele.nativeElement;
        fromEvent(ele, 'drop').subscribe((ev) => { });
    }
    /**
     * @param {?} classObj
     * @param {?=} ele
     * @return {?}
     */
    etAttribute(classObj, ele) {
        if (!ele) {
            return '';
        }
        for (const /** @type {?} */ key in classObj) {
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
    }
}
Iwe7DesignDirective.decorators = [
    { type: Directive, args: [{
                selector: '[iwe7Design],[design],[designClass],[designStyle],[designDrag],[designDrop],[designInstance]'
            },] },
];
/** @nocollapse */
Iwe7DesignDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
    { type: TemplateRef, },
    { type: Renderer2, },
    { type: LazyLoaderService, },
];
Iwe7DesignDirective.propDecorators = {
    "design": [{ type: Input },],
    "designClass": [{ type: Input },],
    "designStyle": [{ type: Input },],
    "designDrag": [{ type: Input },],
    "designDrop": [{ type: Input },],
    "designSetting": [{ type: Input },],
    "designDebug": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Iwe7DesignModule {
}
Iwe7DesignModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [Iwe7DesignDirective]
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
class Iwe7DesignBase extends Iwe7Base {
    /**
     * @param {?} cd
     */
    constructor(cd) {
        super(cd);
    }
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
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { Iwe7LazyLoadModule, LazyLoaderService$1 as LazyLoaderService, LazyComponentModuleBase, LazyComponentModule, LazyComponentModuleFactory, LAZY_COMPONENTS, IcssModule, IcssService, Iwe7CoreModule, Iwe7Base$1 as Iwe7Base, GetViewRefDirective, Iwe7DesignModule, Iwe7DesignBase, Iwe7DesignDirective as ɵa };
//# sourceMappingURL=iwe7.js.map
