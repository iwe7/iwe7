/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} el
 * @return {?}
 */
export function trimWhiteSpace(el) {
    Array.from(el.childNodes).forEach((node) => {
        if (node.nodeType === 3) {
            el.removeChild(node);
        }
    });
}
//# sourceMappingURL=trim-whitespace.js.map