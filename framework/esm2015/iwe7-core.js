import { Directive, ViewContainerRef, Output, EventEmitter, NgModule, Input, ChangeDetectorRef, ɵisObservable, HostBinding, Inject, Injectable, InjectionToken, isDevMode, Renderer2, Injector, defineInjectable, inject, INJECTOR } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { BehaviorSubject, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CacheMemoryService, SubscribersService } from 'iwe7/cache';

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
        this.getViewRef = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.getViewRef.emit(this.view);
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
GetViewRefDirective.propDecorators = {
    "getViewRef": [{ type: Output },],
};

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
                providers: []
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
class Iwe7Base {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        this.props = new BehaviorSubject(/** @type {?} */ ({}));
        // 监听组件事件流
        this.__events = new Subject();
        this.eventsEmit = new EventEmitter();
        this.needDestory = false;
        this.cd = this.injector.get(ChangeDetectorRef);
        this.memory = this.injector.get(CacheMemoryService);
        this.__subscribers = this.injector.get(SubscribersService);
        this.__events.subscribe(res => {
            this.eventsEmit.emit(res);
        });
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
        this.__subscribers.destory(this.__id);
        this.__sub.unsubscribe();
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
        if (!ɵisObservable(props)) {
            props = new BehaviorSubject(props);
        }
        this.props = /** @type {?} */ (this.props.pipe(switchMap(res => props)));
        this.__propsHandler();
    }
    /**
     * @param {?} res
     * @return {?}
     */
    setData(res) {
        this.props.next(Object.assign({}, (/** @type {?} */ (this._props)), (/** @type {?} */ (res))));
    }
    /**
     * @return {?}
     */
    __propsHandler() {
        this.__sub = this.props.subscribe(res => {
            res = res || (/** @type {?} */ ({}));
            this._props = res;
            if ('data-id' in res) {
            }
            else {
                res['data-id'] = this.__getUuid();
            }
            this.__id = res['data-id'];
            this.memory.set(this.__id, this._props);
            this.onPropsChange(res);
        });
    }
    /**
     * @return {?}
     */
    getProps() {
        return this._props;
    }
    /**
     * @param {?} sub
     * @return {?}
     */
    __addSub(sub) {
        this.__subscribers.addSub(this.__id, sub);
    }
    /**
     * @return {?}
     */
    __getUuid() {
        let /** @type {?} */ d = new Date().getTime();
        let /** @type {?} */ uuid = 'meepo.yxxxxxxxxxxxxxxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, c => {
            let /** @type {?} */ r = ((d + Math.random() * 16) % 16) | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
        });
        return uuid;
    }
    /**
     * @param {?} res
     * @return {?}
     */
    onPropsChange(res) {
        this.cd.detectChanges();
    }
}
Iwe7Base.propDecorators = {
    "props": [{ type: Input },],
    "eventsEmit": [{ type: Output },],
    "__id": [{ type: HostBinding, args: ['attr.data-id',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LoggerService {
    /**
     * @param {?} isShow
     */
    constructor(isShow) {
        this.isShow = isShow;
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    log(...args) {
        if (isDevMode() && this.isShow) {
            console.log.apply(console, arguments);
        }
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    warn(...args) {
        if (isDevMode() && this.isShow) {
            console.warn.apply(console, arguments);
        }
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    error(...args) {
        if (isDevMode() && this.isShow) {
            console.error.apply(console, arguments);
        }
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    info(...args) {
        if (isDevMode() && this.isShow) {
            console.log.apply(console, arguments);
        }
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    debug(...args) {
        if (isDevMode() && this.isShow) {
            const /** @type {?} */ arrs = Array.prototype.slice.call(arguments);
            console.log.apply(console, ['[DEBUG]'].concat(arrs));
        }
    }
}
LoggerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
LoggerService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [IWE7_LOGGER_SHOW,] },] },
];
/** @nocollapse */ LoggerService.ngInjectableDef = defineInjectable({ factory: function LoggerService_Factory() { return new LoggerService(inject(IWE7_LOGGER_SHOW)); }, token: LoggerService, providedIn: "root" });
/**
 * @return {?}
 */
function iwe7LoggerShow() {
    return true;
}
const IWE7_LOGGER_SHOW = new InjectionToken('IWE7_LOGGER_SHOW', {
    providedIn: 'root',
    factory: iwe7LoggerShow
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class UuidService {
    constructor() { }
    /**
     * @return {?}
     */
    get() {
        let /** @type {?} */ d = new Date().getTime();
        let /** @type {?} */ uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            let /** @type {?} */ r = ((d + Math.random() * 16) % 16) | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
        });
        return uuid;
    }
}
UuidService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
UuidService.ctorParameters = () => [];
/** @nocollapse */ UuidService.ngInjectableDef = defineInjectable({ factory: function UuidService_Factory() { return new UuidService(); }, token: UuidService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const availablePrefixs = ['moz', 'ms', 'webkit'];
/**
 * @return {?}
 */
function requestAnimationFramePolyfill() {
    let /** @type {?} */ lastTime = 0;
    return function (callback) {
        const /** @type {?} */ currTime = new Date().getTime();
        const /** @type {?} */ timeToCall = Math.max(0, 16 - (currTime - lastTime));
        const /** @type {?} */ id = window.setTimeout(() => {
            callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };
}
/**
 * @return {?}
 */
function getRequestAnimationFrame() {
    if (typeof window === 'undefined') {
        return () => null;
    }
    if (window.requestAnimationFrame) {
        return window.requestAnimationFrame.bind(window);
    }
    const /** @type {?} */ prefix = availablePrefixs.filter(key => `${key}RequestAnimationFrame` in window)[0];
    return prefix
        ? window[`${prefix}RequestAnimationFrame`]
        : requestAnimationFramePolyfill();
}
/**
 * @param {?} id
 * @return {?}
 */
function cancelRequestAnimationFrame(id) {
    if (typeof window === 'undefined') {
        return null;
    }
    if (window.cancelAnimationFrame) {
        return window.cancelAnimationFrame(id);
    }
    const /** @type {?} */ prefix = availablePrefixs.filter(key => `${key}CancelAnimationFrame` in window ||
        `${key}CancelRequestAnimationFrame` in window)[0];
    return prefix
        ? ((/** @type {?} */ (window))[`${prefix}CancelAnimationFrame`] ||
            (/** @type {?} */ (window))[`${prefix}CancelRequestAnimationFrame`]).call(this, id)
        : clearTimeout(id);
}
const reqAnimFrame = getRequestAnimationFrame();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} t
 * @param {?} b
 * @param {?} c
 * @param {?} d
 * @return {?}
 */
function easeInOutCubic(t, b, c, d) {
    const /** @type {?} */ cc = c - b;
    let /** @type {?} */ tt = t / (d / 2);
    if (tt < 1) {
        return cc / 2 * tt * tt * tt + b;
    }
    else {
        return cc / 2 * ((tt -= 2) * tt * tt + 2) + b;
    }
}
class ScrollService {
    /**
     * @param {?} doc
     */
    constructor(doc) {
        this.doc = doc;
    }
    /**
     * @param {?} el
     * @param {?=} topValue
     * @return {?}
     */
    setScrollTop(el, topValue = 0) {
        if (el === window) {
            this.doc.body.scrollTop = topValue;
            this.doc.documentElement.scrollTop = topValue;
        }
        else {
            (/** @type {?} */ (el)).scrollTop = topValue;
        }
    }
    /**
     * @param {?} el
     * @return {?}
     */
    getOffset(el) {
        const /** @type {?} */ ret = {
            top: 0,
            left: 0
        };
        if (!el || !el.getClientRects().length)
            return ret;
        const /** @type {?} */ rect = el.getBoundingClientRect();
        if (rect.width || rect.height) {
            const /** @type {?} */ doc = el.ownerDocument.documentElement;
            ret.top = rect.top - doc.clientTop;
            ret.left = rect.left - doc.clientLeft;
        }
        else {
            ret.top = rect.top;
            ret.left = rect.left;
        }
        return ret;
    }
    /**
     * @param {?=} el
     * @param {?=} top
     * @return {?}
     */
    getScroll(el, top = true) {
        const /** @type {?} */ target = el ? el : window;
        const /** @type {?} */ prop = top ? 'pageYOffset' : 'pageXOffset';
        const /** @type {?} */ method = top ? 'scrollTop' : 'scrollLeft';
        const /** @type {?} */ isWindow = target === window;
        let /** @type {?} */ ret = isWindow ? target[prop] : target[method];
        if (isWindow && typeof ret !== 'number') {
            ret = this.doc.documentElement[method];
        }
        return ret;
    }
    /**
     * @param {?} containerEl
     * @param {?=} targetTopValue
     * @param {?=} easing
     * @param {?=} callback
     * @return {?}
     */
    scrollTo(containerEl, targetTopValue = 0, easing, callback) {
        const /** @type {?} */ target = containerEl ? containerEl : window;
        const /** @type {?} */ scrollTop = this.getScroll(target);
        const /** @type {?} */ startTime = Date.now();
        const /** @type {?} */ frameFunc = () => {
            const /** @type {?} */ timestamp = Date.now();
            const /** @type {?} */ time = timestamp - startTime;
            this.setScrollTop(target, (easing || easeInOutCubic)(time, scrollTop, targetTopValue, 450));
            if (time < 450) {
                reqAnimFrame(frameFunc);
            }
            else {
                if (callback)
                    callback();
            }
        };
        reqAnimFrame(frameFunc);
    }
}
ScrollService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
ScrollService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
];
/** @nocollapse */ ScrollService.ngInjectableDef = defineInjectable({ factory: function ScrollService_Factory() { return new ScrollService(inject(DOCUMENT)); }, token: ScrollService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class HostClassService {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        this.classMap = {};
    }
    /**
     * @param {?} el
     * @param {?} classMap
     * @return {?}
     */
    updateHostClass(el, classMap) {
        this.renderer = this.injector.get(Renderer2, null);
        if (this.renderer) {
            this.removeClass(el, this.classMap, this.renderer);
            this.classMap = Object.assign({}, classMap);
            this.addClass(el, this.classMap, this.renderer);
        }
    }
    /**
     * @param {?} el
     * @param {?} classMap
     * @param {?} renderer
     * @return {?}
     */
    removeClass(el, classMap, renderer) {
        for (const /** @type {?} */ i in classMap) {
            if (classMap.hasOwnProperty(i)) {
                renderer.removeClass(el, i);
            }
        }
    }
    /**
     * @param {?} el
     * @param {?} classMap
     * @param {?} renderer
     * @return {?}
     */
    addClass(el, classMap, renderer) {
        for (const /** @type {?} */ i in classMap) {
            if (classMap.hasOwnProperty(i)) {
                if (classMap[i]) {
                    renderer.addClass(el, i);
                }
            }
        }
    }
}
HostClassService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
HostClassService.ctorParameters = () => [
    { type: Injector, },
];
/** @nocollapse */ HostClassService.ngInjectableDef = defineInjectable({ factory: function HostClassService_Factory() { return new HostClassService(inject(INJECTOR)); }, token: HostClassService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @return {?}
 */
function matchMediaFunc() {
    if (typeof window === 'undefined') {
        return () => null;
    }
    if (window.matchMedia) {
        return window.matchMedia.bind(window);
    }
    else {
        const /** @type {?} */ matchMediaPolyfill = (mediaQuery) => {
            return {
                media: mediaQuery,
                matches: false,
                /**
                 * @return {?}
                 */
                addListener() { },
                /**
                 * @return {?}
                 */
                removeListener() { }
            };
        };
        return matchMediaPolyfill;
    }
}
const matchMedia = matchMediaFunc();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MatchMediaService {
    /**
     * @param {?} mediaQuery
     * @return {?}
     */
    matchMedia(mediaQuery) {
        return matchMedia(mediaQuery);
    }
}
MatchMediaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */ MatchMediaService.ngInjectableDef = defineInjectable({ factory: function MatchMediaService_Factory() { return new MatchMediaService(); }, token: MatchMediaService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const POSITION_MAP = /** @type {?} */ ((/** @type {?} */ ({
    top: {
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom'
    },
    topCenter: {
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom'
    },
    topLeft: {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom'
    },
    topRight: {
        originX: 'end',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'bottom'
    },
    right: {
        originX: 'end',
        originY: 'center',
        overlayX: 'start',
        overlayY: 'center'
    },
    rightTop: {
        originX: 'end',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'top'
    },
    rightBottom: {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'bottom'
    },
    bottom: {
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top'
    },
    bottomCenter: {
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top'
    },
    bottomLeft: {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top'
    },
    bottomRight: {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top'
    },
    left: {
        originX: 'start',
        originY: 'center',
        overlayX: 'end',
        overlayY: 'center'
    },
    leftTop: {
        originX: 'start',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'top'
    },
    leftBottom: {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'bottom'
    }
})));
const DEFAULT_4_POSITIONS = _objectValues([
    POSITION_MAP["top"],
    POSITION_MAP["right"],
    POSITION_MAP["bottom"],
    POSITION_MAP["left"]
]);
const DEFAULT_DROPDOWN_POSITIONS = _objectValues([
    POSITION_MAP["bottomLeft"],
    POSITION_MAP["topLeft"]
]);
const DEFAULT_DATEPICKER_POSITIONS = /** @type {?} */ ([
    {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'top'
    },
    {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'bottom'
    }
]);
const DEFAULT_MENTION_POSITIONS = /** @type {?} */ ([
    POSITION_MAP["bottomLeft"],
    {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'bottom'
    }
]);
/**
 * @template T, S
 * @param {?} array
 * @param {?} iteratee
 * @return {?}
 */
function arrayMap(array, iteratee) {
    let /** @type {?} */ index = -1;
    const /** @type {?} */ length = array == null ? 0 : array.length;
    const /** @type {?} */ result = Array(length);
    while (++index < length) {
        result[index] = iteratee(array[index], index, array);
    }
    return result;
}
/**
 * @template T
 * @param {?} object
 * @param {?} props
 * @return {?}
 */
function baseValues(object, props) {
    return arrayMap(props, key => {
        return object[key];
    });
}
/**
 * @template T
 * @param {?} object
 * @return {?}
 */
function _objectValues(object) {
    return object == null ? [] : baseValues(object, Object.keys(object));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} el
 * @return {?}
 */
function trimWhiteSpace(el) {
    Array.from(el.childNodes).forEach((node) => {
        if (node.nodeType === 3) {
            el.removeChild(node);
        }
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */

/**
 * @record
 */

class NzUpdateHostClassService extends HostClassService {
}
NzUpdateHostClassService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */ NzUpdateHostClassService.ngInjectableDef = defineInjectable({ factory: function NzUpdateHostClassService_Factory() { return new NzUpdateHostClassService(inject(INJECTOR)); }, token: NzUpdateHostClassService, providedIn: "root" });
class NzMatchMediaService extends MatchMediaService {
}
NzMatchMediaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */ NzMatchMediaService.ngInjectableDef = defineInjectable({ factory: function NzMatchMediaService_Factory() { return new NzMatchMediaService(); }, token: NzMatchMediaService, providedIn: "root" });
class NzScrollService extends ScrollService {
}
NzScrollService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */ NzScrollService.ngInjectableDef = defineInjectable({ factory: function NzScrollService_Factory() { return new NzScrollService(inject(DOCUMENT)); }, token: NzScrollService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { Iwe7CoreModule, Iwe7Base, GetViewRefDirective, LoggerService, IWE7_LOGGER_SHOW, UuidService, ScrollService, HostClassService, MatchMediaService, matchMedia, reqAnimFrame, cancelRequestAnimationFrame, trimWhiteSpace, NzUpdateHostClassService, NzMatchMediaService, NzScrollService, POSITION_MAP, DEFAULT_4_POSITIONS, DEFAULT_DROPDOWN_POSITIONS, DEFAULT_DATEPICKER_POSITIONS, DEFAULT_MENTION_POSITIONS, iwe7LoggerShow as ɵa };
//# sourceMappingURL=iwe7-core.js.map
