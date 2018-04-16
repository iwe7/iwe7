(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs'), require('underscore')) :
	typeof define === 'function' && define.amd ? define('iwe7/cache', ['exports', '@angular/core', '@angular/common', 'rxjs', 'underscore'], factory) :
	(factory((global.iwe7 = global.iwe7 || {}, global.iwe7.cache = {}),global.ng.core,global.ng.common,global.rxjs,global.underscore));
}(this, (function (exports,core,common,rxjs,underscore) { 'use strict';

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

var CacheModule = /** @class */ (function () {
    function CacheModule() {
    }
    return CacheModule;
}());
CacheModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule]
            },] },
];
var CacheMemory = /** @class */ (function () {
    function CacheMemory() {
        this.data = new Map();
        this.data$ = new rxjs.Subject();
    }
    CacheMemory.prototype.onChange = function () {
        return this.data$;
    };
    CacheMemory.prototype.init = function (data) {
        this.data = new Map(data);
    };
    CacheMemory.prototype.get = function (key) {
        return this.data.get(key) || {};
    };
    CacheMemory.prototype.set = function (key, val) {
        this.data.set(key, val);
        this.data$.next(this.data);
        return this;
    };
    CacheMemory.prototype.delete = function (key) {
        this.data.delete(key);
        this.data$.next(this.data);
        return this;
    };
    CacheMemory.prototype.clear = function () {
        this.data.clear();
        this.data$.next(this.data);
        return this;
    };
    CacheMemory.prototype.has = function (key) {
        return this.data.has(key);
    };
    CacheMemory.prototype.forEach = function (callbackfn) {
        this.data.forEach(callbackfn);
        return this;
    };
    CacheMemory.prototype.saveToLocalStorage = function (key) {
        var data = {};
        this.forEach(function (item, key, map$$1) {
            data[key] = item;
        });
        localStorage.setItem(key, JSON.stringify(data));
    };
    CacheMemory.prototype.initFromLoacalStorage = function (key) {
        var item = localStorage.getItem(key);
        if (!!item) {
            item = JSON.parse(item);
            var data = underscore.map(item, function (item, key) {
                return [key + '', item];
            });
            this.data = new Map(data);
            return this;
        }
    };
    return CacheMemory;
}());
var CacheMemoryService = /** @class */ (function (_super) {
    __extends(CacheMemoryService, _super);
    function CacheMemoryService() {
        var _this = _super.call(this) || this;
        _this.name = '大家好，我是cache memory service，你能把临时数据交给我保存！';
        return _this;
    }
    return CacheMemoryService;
}(CacheMemory));
CacheMemoryService.decorators = [
    { type: core.Injectable, args: [{
                providedIn: 'root'
            },] },
];
CacheMemoryService.ctorParameters = function () { return []; };
CacheMemoryService.ngInjectableDef = core.defineInjectable({ factory: function CacheMemoryService_Factory() { return new CacheMemoryService(); }, token: CacheMemoryService, providedIn: "root" });
var SubscribersService = /** @class */ (function (_super) {
    __extends(SubscribersService, _super);
    function SubscribersService() {
        var _this = _super.call(this) || this;
        _this.desc = '大家好我是，subscribers service，我服保存订阅';
        return _this;
    }
    SubscribersService.prototype.unsubscribe = function (key) {
        var sub = this.get(key);
        if (sub && sub['unsubscribe']) {
            sub.unsubscribe();
        }
    };
    SubscribersService.prototype.addSub = function (key, subscribtion) {
        this.unsubscribe(key);
        this.set(key, subscribtion);
        return this;
    };
    SubscribersService.prototype.destory = function (key) {
        this.unsubscribe(key);
        this.delete(key);
    };
    return SubscribersService;
}(CacheMemory));
SubscribersService.decorators = [
    { type: core.Injectable, args: [{
                providedIn: 'root'
            },] },
];
SubscribersService.ctorParameters = function () { return []; };
SubscribersService.ngInjectableDef = core.defineInjectable({ factory: function SubscribersService_Factory() { return new SubscribersService(); }, token: SubscribersService, providedIn: "root" });

exports.CacheModule = CacheModule;
exports.CacheMemoryService = CacheMemoryService;
exports.SubscribersService = SubscribersService;
exports.ɵa = CacheMemory;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=iwe7-cache.umd.js.map
