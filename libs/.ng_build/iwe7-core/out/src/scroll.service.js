/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { reqAnimFrame } from './functions/request-animation';
import * as i0 from "@angular/core";
import * as i1 from "../index";
import * as i2 from "@angular/common";
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
export class ScrollService {
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
/** @nocollapse */ ScrollService.ngInjectableDef = i0.defineInjectable({ factory: function ScrollService_Factory() { return new i1.ScrollService(i0.inject(i2.DOCUMENT)); }, token: i1.ScrollService, providedIn: "root" });
function ScrollService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ScrollService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ScrollService.ctorParameters;
    /** @type {?} */
    ScrollService.prototype.doc;
}
//# sourceMappingURL=scroll.service.js.map