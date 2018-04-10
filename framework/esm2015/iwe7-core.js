import { Directive, ViewContainerRef, NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, merge } from 'rxjs';
import { first, filter, takeWhile } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class GetViewRefDirective {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Iwe7CoreModule {
}
Iwe7CoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [GetViewRefDirective],
                exports: [GetViewRefDirective],
                entryComponents: []
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
class Iwe7Base {
    /**
     * @param {?} cd
     */
    constructor(cd) {
        this.cd = cd;
        this.props = new Observable();
        // 需要注销开关
        this.needDestory = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if ('props' in changes) {
            if (!changes['props'].isFirstChange) {
                this.__propsHandler();
            }
        }
    }
    /**
     * 注销
     * @return {?}
     */
    ngOnDestroy() {
        this.needDestory = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.__propsHandler();
    }
    /**
     * @param {?} props
     * @return {?}
     */
    setProps(props) {
        this.props = merge(this.props, props);
        this.__propsHandler();
    }
    /**
     * @return {?}
     */
    __propsHandler() {
        this.props = merge(
        // 添加默认值
        this.props.pipe(first((val, idx) => idx === 0, /** @type {?} */ ({}))), this.props).pipe(
        // 去除{}
        filter(val => Object.keys(val).length > 0),
        // 自动注销
        takeWhile(val => !this.needDestory));
        this.props.subscribe(res => {
            this.onPropsChange(res);
            this.cd.markForCheck();
        });
    }
}
Iwe7Base.propDecorators = {
    "props": [{ type: Input },],
};

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

export { Iwe7CoreModule, Iwe7Base, GetViewRefDirective };
//# sourceMappingURL=iwe7-core.js.map
