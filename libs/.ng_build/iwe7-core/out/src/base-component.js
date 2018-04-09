/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Input } from '@angular/core';
import { Observable, merge } from 'rxjs';
import { first, filter, takeWhile } from 'rxjs/operators';
/**
 * @abstract
 * @template T
 */
export class Iwe7Base {
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
function Iwe7Base_tsickle_Closure_declarations() {
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    Iwe7Base.propDecorators;
    /** @type {?} */
    Iwe7Base.prototype.props;
    /** @type {?} */
    Iwe7Base.prototype.needDestory;
    /** @type {?} */
    Iwe7Base.prototype.cd;
    /**
     * @abstract
     * @param {?} res
     * @return {?}
     */
    Iwe7Base.prototype.onPropsChange = function (res) { };
}
//# sourceMappingURL=base-component.js.map