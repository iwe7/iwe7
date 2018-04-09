/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ViewContainerRef } from '@angular/core';
export class GetViewRefDirective {
    /**
     * @param {?} view
     */
    constructor(view) {
        this.view = view;
    }
}
GetViewRefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[getViewRef]',
                exportAs: 'getViewRef'
            },] },
];
/** @nocollapse */
GetViewRefDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
function GetViewRefDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    GetViewRefDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    GetViewRefDirective.ctorParameters;
    /** @type {?} */
    GetViewRefDirective.prototype.view;
}
//# sourceMappingURL=get-view-ref.directive.js.map