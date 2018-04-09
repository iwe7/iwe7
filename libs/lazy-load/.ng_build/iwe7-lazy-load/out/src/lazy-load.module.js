/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ROUTES } from '@angular/router';
export class Iwe7LazyLoadModule {
    /**
     * @param {?} lazyComponents
     * @return {?}
     */
    static forRoot(lazyComponents) {
        return {
            ngModule: Iwe7LazyLoadModule,
            providers: [
                {
                    provide: ROUTES,
                    useValue: lazyComponents,
                    multi: true
                }
            ]
        };
    }
}
Iwe7LazyLoadModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: []
            },] },
];
function Iwe7LazyLoadModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    Iwe7LazyLoadModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    Iwe7LazyLoadModule.ctorParameters;
}
//# sourceMappingURL=lazy-load.module.js.map