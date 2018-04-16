import { __spread } from 'tslib';
import { NgModule, Injectable, defineInjectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { merge } from 'rxjs';
import { map, scan, first } from 'rxjs/operators';

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
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
IcssService.ctorParameters = function () { return []; };
IcssService.ngInjectableDef = defineInjectable({ factory: function IcssService_Factory() { return new IcssService(); }, token: IcssService, providedIn: "root" });

export { IcssModule, IcssService };
//# sourceMappingURL=iwe7-icss.js.map
