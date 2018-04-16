import { __extends } from 'tslib';
import { NgModule, Injectable, defineInjectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { map } from 'underscore';

var CacheModule = /** @class */ (function () {
    function CacheModule() {
    }
    return CacheModule;
}());
CacheModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule]
            },] },
];
var CacheMemory = /** @class */ (function () {
    function CacheMemory() {
        this.data = new Map();
        this.data$ = new Subject();
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
            var data = map(item, function (item, key) {
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
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
CacheMemoryService.ctorParameters = function () { return []; };
CacheMemoryService.ngInjectableDef = defineInjectable({ factory: function CacheMemoryService_Factory() { return new CacheMemoryService(); }, token: CacheMemoryService, providedIn: "root" });
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
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
SubscribersService.ctorParameters = function () { return []; };
SubscribersService.ngInjectableDef = defineInjectable({ factory: function SubscribersService_Factory() { return new SubscribersService(); }, token: SubscribersService, providedIn: "root" });

export { CacheModule, CacheMemoryService, SubscribersService, CacheMemory as ɵa };
//# sourceMappingURL=iwe7-cache.js.map
