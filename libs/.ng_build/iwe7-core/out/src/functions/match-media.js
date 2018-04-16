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
export const /** @type {?} */ matchMedia = matchMediaFunc();
//# sourceMappingURL=match-media.js.map