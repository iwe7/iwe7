import { NgModule, Injectable, defineInjectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { merge } from 'rxjs';
import { map, scan, first } from 'rxjs/operators';

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
/** @nocollapse */ IcssService.ngInjectableDef = defineInjectable({ factory: function IcssService_Factory() { return new IcssService(); }, token: IcssService, providedIn: "root" });

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

export { IcssModule, IcssService };
//# sourceMappingURL=iwe7-icss.js.map
