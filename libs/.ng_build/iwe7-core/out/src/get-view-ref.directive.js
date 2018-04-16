/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ViewContainerRef, Output, EventEmitter } from '@angular/core';
export class GetViewRefDirective {
    /**
     * @param {?} view
     */
    constructor(view) {
        this.view = view;
        this.getViewRef = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.getViewRef.emit(this.view);
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
GetViewRefDirective.propDecorators = {
    "getViewRef": [{ type: Output },],
};
function GetViewRefDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    GetViewRefDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    GetViewRefDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    GetViewRefDirective.propDecorators;
    /** @type {?} */
    GetViewRefDirective.prototype.getViewRef;
    /** @type {?} */
    GetViewRefDirective.prototype.view;
}
//# sourceMappingURL=get-view-ref.directive.js.map