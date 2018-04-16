(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs'), require('rxjs/operators'), require('iwe7/cache')) :
	typeof define === 'function' && define.amd ? define('iwe7/core', ['exports', '@angular/core', '@angular/common', 'rxjs', 'rxjs/operators', 'iwe7/cache'], factory) :
	(factory((global.iwe7 = global.iwe7 || {}, global.iwe7.core = {}),global.ng.core,global.ng.common,global.rxjs,global.Rx.Observable.prototype,global.iwe7.cache));
}(this, (function (exports,core,common,rxjs,operators,cache) { 'use strict';

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
var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var GetViewRefDirective = /** @class */ (function () {
    function GetViewRefDirective(view) {
        this.view = view;
        this.getViewRef = new core.EventEmitter();
    }
    GetViewRefDirective.prototype.ngOnInit = function () {
        this.getViewRef.emit(this.view);
    };
    return GetViewRefDirective;
}());
GetViewRefDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[getViewRef]',
                exportAs: 'getViewRef'
            },] },
];
GetViewRefDirective.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
]; };
GetViewRefDirective.propDecorators = {
    "getViewRef": [{ type: core.Output },],
};
var Iwe7CoreModule = /** @class */ (function () {
    function Iwe7CoreModule() {
    }
    return Iwe7CoreModule;
}());
Iwe7CoreModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [GetViewRefDirective],
                exports: [GetViewRefDirective],
                providers: []
            },] },
];
var Iwe7Base = /** @class */ (function () {
    function Iwe7Base(injector) {
        var _this = this;
        this.injector = injector;
        this.props = new rxjs.BehaviorSubject(({}));
        this.__events = new rxjs.Subject();
        this.eventsEmit = new core.EventEmitter();
        this.needDestory = false;
        this.cd = this.injector.get(core.ChangeDetectorRef);
        this.memory = this.injector.get(cache.CacheMemoryService);
        this.__subscribers = this.injector.get(cache.SubscribersService);
        this.__events.subscribe(function (res) {
            _this.eventsEmit.emit(res);
        });
    }
    Iwe7Base.prototype.ngOnChanges = function (changes) {
        if ('props' in changes) {
            if (!changes['props'].isFirstChange) {
                this.__propsHandler();
            }
        }
    };
    Iwe7Base.prototype.ngOnDestroy = function () {
        this.__subscribers.destory(this.__id);
        this.__sub.unsubscribe();
        this.needDestory = true;
    };
    Iwe7Base.prototype.ngOnInit = function () {
        this.__propsHandler();
    };
    Iwe7Base.prototype.setProps = function (props) {
        if (!core.ɵisObservable(props)) {
            props = new rxjs.BehaviorSubject(props);
        }
        this.props = (this.props.pipe(operators.switchMap(function (res) { return props; })));
        this.__propsHandler();
    };
    Iwe7Base.prototype.setData = function (res) {
        this.props.next(Object.assign({}, ((this._props)), ((res))));
    };
    Iwe7Base.prototype.__propsHandler = function () {
        var _this = this;
        this.__sub = this.props.subscribe(function (res) {
            res = res || (({}));
            _this._props = res;
            if ('data-id' in res) {
            }
            else {
                res['data-id'] = _this.__getUuid();
            }
            _this.__id = res['data-id'];
            _this.memory.set(_this.__id, _this._props);
            _this.onPropsChange(res);
        });
    };
    Iwe7Base.prototype.getProps = function () {
        return this._props;
    };
    Iwe7Base.prototype.__addSub = function (sub) {
        this.__subscribers.addSub(this.__id, sub);
    };
    Iwe7Base.prototype.__getUuid = function () {
        var d = new Date().getTime();
        var uuid = 'meepo.yxxxxxxxxxxxxxxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = ((d + Math.random() * 16) % 16) | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
        });
        return uuid;
    };
    Iwe7Base.prototype.onPropsChange = function (res) {
        this.cd.detectChanges();
    };
    return Iwe7Base;
}());
Iwe7Base.propDecorators = {
    "props": [{ type: core.Input },],
    "eventsEmit": [{ type: core.Output },],
    "__id": [{ type: core.HostBinding, args: ['attr.data-id',] },],
};
var LoggerService = /** @class */ (function () {
    function LoggerService(isShow) {
        this.isShow = isShow;
    }
    LoggerService.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (core.isDevMode() && this.isShow) {
            console.log.apply(console, arguments);
        }
    };
    LoggerService.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (core.isDevMode() && this.isShow) {
            console.warn.apply(console, arguments);
        }
    };
    LoggerService.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (core.isDevMode() && this.isShow) {
            console.error.apply(console, arguments);
        }
    };
    LoggerService.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (core.isDevMode() && this.isShow) {
            console.log.apply(console, arguments);
        }
    };
    LoggerService.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (core.isDevMode() && this.isShow) {
            var arrs = Array.prototype.slice.call(arguments);
            console.log.apply(console, ['[DEBUG]'].concat(arrs));
        }
    };
    return LoggerService;
}());
LoggerService.decorators = [
    { type: core.Injectable, args: [{
                providedIn: 'root'
            },] },
];
LoggerService.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core.Inject, args: [IWE7_LOGGER_SHOW,] },] },
]; };
LoggerService.ngInjectableDef = core.defineInjectable({ factory: function LoggerService_Factory() { return new LoggerService(core.inject(IWE7_LOGGER_SHOW)); }, token: LoggerService, providedIn: "root" });
function iwe7LoggerShow() {
    return true;
}
var IWE7_LOGGER_SHOW = new core.InjectionToken('IWE7_LOGGER_SHOW', {
    providedIn: 'root',
    factory: iwe7LoggerShow
});
var UuidService = /** @class */ (function () {
    function UuidService() {
    }
    UuidService.prototype.get = function () {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = ((d + Math.random() * 16) % 16) | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
        });
        return uuid;
    };
    return UuidService;
}());
UuidService.decorators = [
    { type: core.Injectable, args: [{
                providedIn: 'root'
            },] },
];
UuidService.ctorParameters = function () { return []; };
UuidService.ngInjectableDef = core.defineInjectable({ factory: function UuidService_Factory() { return new UuidService(); }, token: UuidService, providedIn: "root" });
var availablePrefixs = ['moz', 'ms', 'webkit'];
function requestAnimationFramePolyfill() {
    var lastTime = 0;
    return function (callback) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function () {
            callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };
}
function getRequestAnimationFrame() {
    if (typeof window === 'undefined') {
        return function () { return null; };
    }
    if (window.requestAnimationFrame) {
        return window.requestAnimationFrame.bind(window);
    }
    var prefix = availablePrefixs.filter(function (key) { return key + "RequestAnimationFrame" in window; })[0];
    return prefix
        ? window[prefix + "RequestAnimationFrame"]
        : requestAnimationFramePolyfill();
}
function cancelRequestAnimationFrame(id) {
    if (typeof window === 'undefined') {
        return null;
    }
    if (window.cancelAnimationFrame) {
        return window.cancelAnimationFrame(id);
    }
    var prefix = availablePrefixs.filter(function (key) { return key + "CancelAnimationFrame" in window ||
        key + "CancelRequestAnimationFrame" in window; })[0];
    return prefix
        ? (((window))[prefix + "CancelAnimationFrame"] ||
            ((window))[prefix + "CancelRequestAnimationFrame"]).call(this, id)
        : clearTimeout(id);
}
var reqAnimFrame = getRequestAnimationFrame();
function easeInOutCubic(t, b, c, d) {
    var cc = c - b;
    var tt = t / (d / 2);
    if (tt < 1) {
        return cc / 2 * tt * tt * tt + b;
    }
    else {
        return cc / 2 * ((tt -= 2) * tt * tt + 2) + b;
    }
}
var ScrollService = /** @class */ (function () {
    function ScrollService(doc) {
        this.doc = doc;
    }
    ScrollService.prototype.setScrollTop = function (el, topValue) {
        if (topValue === void 0) { topValue = 0; }
        if (el === window) {
            this.doc.body.scrollTop = topValue;
            this.doc.documentElement.scrollTop = topValue;
        }
        else {
            ((el)).scrollTop = topValue;
        }
    };
    ScrollService.prototype.getOffset = function (el) {
        var ret = {
            top: 0,
            left: 0
        };
        if (!el || !el.getClientRects().length)
            return ret;
        var rect = el.getBoundingClientRect();
        if (rect.width || rect.height) {
            var doc = el.ownerDocument.documentElement;
            ret.top = rect.top - doc.clientTop;
            ret.left = rect.left - doc.clientLeft;
        }
        else {
            ret.top = rect.top;
            ret.left = rect.left;
        }
        return ret;
    };
    ScrollService.prototype.getScroll = function (el, top) {
        if (top === void 0) { top = true; }
        var target = el ? el : window;
        var prop = top ? 'pageYOffset' : 'pageXOffset';
        var method = top ? 'scrollTop' : 'scrollLeft';
        var isWindow = target === window;
        var ret = isWindow ? target[prop] : target[method];
        if (isWindow && typeof ret !== 'number') {
            ret = this.doc.documentElement[method];
        }
        return ret;
    };
    ScrollService.prototype.scrollTo = function (containerEl, targetTopValue, easing, callback) {
        var _this = this;
        if (targetTopValue === void 0) { targetTopValue = 0; }
        var target = containerEl ? containerEl : window;
        var scrollTop = this.getScroll(target);
        var startTime = Date.now();
        var frameFunc = function () {
            var timestamp = Date.now();
            var time = timestamp - startTime;
            _this.setScrollTop(target, (easing || easeInOutCubic)(time, scrollTop, targetTopValue, 450));
            if (time < 450) {
                reqAnimFrame(frameFunc);
            }
            else {
                if (callback)
                    callback();
            }
        };
        reqAnimFrame(frameFunc);
    };
    return ScrollService;
}());
ScrollService.decorators = [
    { type: core.Injectable, args: [{
                providedIn: 'root'
            },] },
];
ScrollService.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] },] },
]; };
ScrollService.ngInjectableDef = core.defineInjectable({ factory: function ScrollService_Factory() { return new ScrollService(core.inject(common.DOCUMENT)); }, token: ScrollService, providedIn: "root" });
var HostClassService = /** @class */ (function () {
    function HostClassService(injector) {
        this.injector = injector;
        this.classMap = {};
    }
    HostClassService.prototype.updateHostClass = function (el, classMap) {
        this.renderer = this.injector.get(core.Renderer2, null);
        if (this.renderer) {
            this.removeClass(el, this.classMap, this.renderer);
            this.classMap = Object.assign({}, classMap);
            this.addClass(el, this.classMap, this.renderer);
        }
    };
    HostClassService.prototype.removeClass = function (el, classMap, renderer) {
        for (var i in classMap) {
            if (classMap.hasOwnProperty(i)) {
                renderer.removeClass(el, i);
            }
        }
    };
    HostClassService.prototype.addClass = function (el, classMap, renderer) {
        for (var i in classMap) {
            if (classMap.hasOwnProperty(i)) {
                if (classMap[i]) {
                    renderer.addClass(el, i);
                }
            }
        }
    };
    return HostClassService;
}());
HostClassService.decorators = [
    { type: core.Injectable, args: [{
                providedIn: 'root'
            },] },
];
HostClassService.ctorParameters = function () { return [
    { type: core.Injector, },
]; };
HostClassService.ngInjectableDef = core.defineInjectable({ factory: function HostClassService_Factory() { return new HostClassService(core.inject(core.INJECTOR)); }, token: HostClassService, providedIn: "root" });
function matchMediaFunc() {
    if (typeof window === 'undefined') {
        return function () { return null; };
    }
    if (window.matchMedia) {
        return window.matchMedia.bind(window);
    }
    else {
        var matchMediaPolyfill = function (mediaQuery) {
            return {
                media: mediaQuery,
                matches: false,
                addListener: function () { },
                removeListener: function () { }
            };
        };
        return matchMediaPolyfill;
    }
}
var matchMedia = matchMediaFunc();
var MatchMediaService = /** @class */ (function () {
    function MatchMediaService() {
    }
    MatchMediaService.prototype.matchMedia = function (mediaQuery) {
        return matchMedia(mediaQuery);
    };
    return MatchMediaService;
}());
MatchMediaService.decorators = [
    { type: core.Injectable, args: [{
                providedIn: 'root'
            },] },
];
MatchMediaService.ngInjectableDef = core.defineInjectable({ factory: function MatchMediaService_Factory() { return new MatchMediaService(); }, token: MatchMediaService, providedIn: "root" });
var POSITION_MAP = ((({
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
var DEFAULT_4_POSITIONS = _objectValues([
    POSITION_MAP["top"],
    POSITION_MAP["right"],
    POSITION_MAP["bottom"],
    POSITION_MAP["left"]
]);
var DEFAULT_DROPDOWN_POSITIONS = _objectValues([
    POSITION_MAP["bottomLeft"],
    POSITION_MAP["topLeft"]
]);
var DEFAULT_DATEPICKER_POSITIONS = ([
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
var DEFAULT_MENTION_POSITIONS = ([
    POSITION_MAP["bottomLeft"],
    {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'bottom'
    }
]);
function arrayMap(array, iteratee) {
    var index = -1;
    var length = array == null ? 0 : array.length;
    var result = Array(length);
    while (++index < length) {
        result[index] = iteratee(array[index], index, array);
    }
    return result;
}
function baseValues(object, props) {
    return arrayMap(props, function (key) {
        return object[key];
    });
}
function _objectValues(object) {
    return object == null ? [] : baseValues(object, Object.keys(object));
}
function trimWhiteSpace(el) {
    Array.from(el.childNodes).forEach(function (node) {
        if (node.nodeType === 3) {
            el.removeChild(node);
        }
    });
}
var NzUpdateHostClassService = /** @class */ (function (_super) {
    __extends(NzUpdateHostClassService, _super);
    function NzUpdateHostClassService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NzUpdateHostClassService;
}(HostClassService));
NzUpdateHostClassService.decorators = [
    { type: core.Injectable, args: [{
                providedIn: 'root'
            },] },
];
NzUpdateHostClassService.ngInjectableDef = core.defineInjectable({ factory: function NzUpdateHostClassService_Factory() { return new NzUpdateHostClassService(core.inject(core.INJECTOR)); }, token: NzUpdateHostClassService, providedIn: "root" });
var NzMatchMediaService = /** @class */ (function (_super) {
    __extends(NzMatchMediaService, _super);
    function NzMatchMediaService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NzMatchMediaService;
}(MatchMediaService));
NzMatchMediaService.decorators = [
    { type: core.Injectable, args: [{
                providedIn: 'root'
            },] },
];
NzMatchMediaService.ngInjectableDef = core.defineInjectable({ factory: function NzMatchMediaService_Factory() { return new NzMatchMediaService(); }, token: NzMatchMediaService, providedIn: "root" });
var NzScrollService = /** @class */ (function (_super) {
    __extends(NzScrollService, _super);
    function NzScrollService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NzScrollService;
}(ScrollService));
NzScrollService.decorators = [
    { type: core.Injectable, args: [{
                providedIn: 'root'
            },] },
];
NzScrollService.ngInjectableDef = core.defineInjectable({ factory: function NzScrollService_Factory() { return new NzScrollService(core.inject(common.DOCUMENT)); }, token: NzScrollService, providedIn: "root" });

exports.Iwe7CoreModule = Iwe7CoreModule;
exports.Iwe7Base = Iwe7Base;
exports.GetViewRefDirective = GetViewRefDirective;
exports.LoggerService = LoggerService;
exports.IWE7_LOGGER_SHOW = IWE7_LOGGER_SHOW;
exports.UuidService = UuidService;
exports.ScrollService = ScrollService;
exports.HostClassService = HostClassService;
exports.MatchMediaService = MatchMediaService;
exports.matchMedia = matchMedia;
exports.reqAnimFrame = reqAnimFrame;
exports.cancelRequestAnimationFrame = cancelRequestAnimationFrame;
exports.trimWhiteSpace = trimWhiteSpace;
exports.NzUpdateHostClassService = NzUpdateHostClassService;
exports.NzMatchMediaService = NzMatchMediaService;
exports.NzScrollService = NzScrollService;
exports.POSITION_MAP = POSITION_MAP;
exports.DEFAULT_4_POSITIONS = DEFAULT_4_POSITIONS;
exports.DEFAULT_DROPDOWN_POSITIONS = DEFAULT_DROPDOWN_POSITIONS;
exports.DEFAULT_DATEPICKER_POSITIONS = DEFAULT_DATEPICKER_POSITIONS;
exports.DEFAULT_MENTION_POSITIONS = DEFAULT_MENTION_POSITIONS;
exports.ɵa = iwe7LoggerShow;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=iwe7-core.umd.js.map
