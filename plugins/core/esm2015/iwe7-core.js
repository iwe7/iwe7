import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, merge } from 'rxjs';
import { first, filter, takeWhile } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Iwe7CoreModule {
}
Iwe7CoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [],
                exports: [],
                entryComponents: []
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BaseComponent {
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
        this.props.pipe(first((val, idx) => idx === 0, {})), this.props).pipe(
        // 去除{}
        filter(val => Object.keys(val).length > 0),
        // 自动注销
        takeWhile(val => !this.needDestory));
        this.props.subscribe(res => {
            this.cd.markForCheck();
        });
    }
}
BaseComponent.propDecorators = {
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

export { Iwe7CoreModule, BaseComponent };
//# sourceMappingURL=iwe7-core.js.map
