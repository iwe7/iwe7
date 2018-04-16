/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ availablePrefixs = ['moz', 'ms', 'webkit'];
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
export function cancelRequestAnimationFrame(id) {
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
export const /** @type {?} */ reqAnimFrame = getRequestAnimationFrame();
//# sourceMappingURL=request-animation.js.map