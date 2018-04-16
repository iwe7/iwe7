/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { merge } from 'rxjs';
import { map, scan, first } from 'rxjs/operators';
import * as i0 from "@angular/core";
/**
 * @record
 */
export function IcssInterface() { }
function IcssInterface_tsickle_Closure_declarations() {
    /* TODO: handle strange member:
    [key: string]: Observable<any>;
    */
}
export class IcssService {
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
    /**
     * @return {?}
     */
    vendorPrefix() {
        if (typeof window === 'undefined' || typeof document === 'undefined')
            return '';
        const /** @type {?} */ styles = window.getComputedStyle(document.documentElement, '') || [
            '-moz-hidden-iframe'
        ];
        const /** @type {?} */ pre = (Array.prototype.slice
            .call(styles)
            .join('')
            .match(/-(moz|webkit|ms)-/) ||
            ((/** @type {?} */ (styles)).OLink === '' && ['', 'o']))[1];
        switch (pre) {
            case 'ms':
                return 'ms';
            default:
                return pre && pre.length ? pre[0].toUpperCase() + pre.substr(1) : '';
        }
    }
}
IcssService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
IcssService.ctorParameters = () => [];
/** @nocollapse */ IcssService.ngInjectableDef = i0.defineInjectable({ factory: function IcssService_Factory() { return new IcssService(); }, token: IcssService, providedIn: "root" });
function IcssService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    IcssService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    IcssService.ctorParameters;
    /** @type {?} */
    IcssService.prototype.state;
}
//# sourceMappingURL=icss.service.js.map