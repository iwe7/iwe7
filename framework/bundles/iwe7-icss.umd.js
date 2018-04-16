(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs'), require('rxjs/operators')) :
	typeof define === 'function' && define.amd ? define('iwe7/icss', ['exports', '@angular/core', '@angular/common', 'rxjs', 'rxjs/operators'], factory) :
	(factory((global.iwe7 = global.iwe7 || {}, global.iwe7.icss = {}),global.ng.core,global.ng.common,global.rxjs,global.Rx.Observable.prototype));
}(this, (function (exports,core,common,rxjs,operators) { 'use strict';

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
    IcssService.prototype.vendorPrefix = function () {
        if (typeof window === 'undefined' || typeof document === 'undefined')
            return '';
        var styles = window.getComputedStyle(document.documentElement, '') || [
            '-moz-hidden-iframe'
        ];
        var pre = (Array.prototype.slice
            .call(styles)
            .join('')
            .match(/-(moz|webkit|ms)-/) ||
            (((styles)).OLink === '' && ['', 'o']))[1];
        switch (pre) {
            case 'ms':
                return 'ms';
            default:
                return pre && pre.length ? pre[0].toUpperCase() + pre.substr(1) : '';
        }
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

exports.IcssModule = IcssModule;
exports.IcssService = IcssService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=iwe7-icss.umd.js.map
