/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Input, ChangeDetectorRef, ɵisObservable, HostBinding, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CacheMemoryService, SubscribersService } from 'iwe7/cache';
/**
 * @abstract
 * @template T
 */
export class Iwe7Base {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        this.props = new BehaviorSubject(/** @type {?} */ ({}));
        // 监听组件事件流
        this.__events = new Subject();
        this.eventsEmit = new EventEmitter();
        this.needDestory = false;
        this.cd = this.injector.get(ChangeDetectorRef);
        this.memory = this.injector.get(CacheMemoryService);
        this.__subscribers = this.injector.get(SubscribersService);
        this.__events.subscribe(res => {
            this.eventsEmit.emit(res);
        });
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
        this.__subscribers.destory(this.__id);
        this.__sub.unsubscribe();
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
        if (!ɵisObservable(props)) {
            props = new BehaviorSubject(props);
        }
        this.props = /** @type {?} */ (this.props.pipe(switchMap(res => props)));
        this.__propsHandler();
    }
    /**
     * @param {?} res
     * @return {?}
     */
    setData(res) {
        this.props.next(Object.assign({}, (/** @type {?} */ (this._props)), (/** @type {?} */ (res))));
    }
    /**
     * @return {?}
     */
    __propsHandler() {
        this.__sub = this.props.subscribe(res => {
            res = res || (/** @type {?} */ ({}));
            this._props = res;
            if ('data-id' in res) {
            }
            else {
                res['data-id'] = this.__getUuid();
            }
            this.__id = res['data-id'];
            this.memory.set(this.__id, this._props);
            this.onPropsChange(res);
        });
    }
    /**
     * @return {?}
     */
    getProps() {
        return this._props;
    }
    /**
     * @param {?} sub
     * @return {?}
     */
    __addSub(sub) {
        this.__subscribers.addSub(this.__id, sub);
    }
    /**
     * @return {?}
     */
    __getUuid() {
        let /** @type {?} */ d = new Date().getTime();
        let /** @type {?} */ uuid = 'meepo.yxxxxxxxxxxxxxxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, c => {
            let /** @type {?} */ r = ((d + Math.random() * 16) % 16) | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
        });
        return uuid;
    }
    /**
     * @param {?} res
     * @return {?}
     */
    onPropsChange(res) {
        this.cd.detectChanges();
    }
}
Iwe7Base.propDecorators = {
    "props": [{ type: Input },],
    "eventsEmit": [{ type: Output },],
    "__id": [{ type: HostBinding, args: ['attr.data-id',] },],
};
function Iwe7Base_tsickle_Closure_declarations() {
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    Iwe7Base.propDecorators;
    /** @type {?} */
    Iwe7Base.prototype._props;
    /** @type {?} */
    Iwe7Base.prototype.instance;
    /** @type {?} */
    Iwe7Base.prototype.props;
    /** @type {?} */
    Iwe7Base.prototype.__events;
    /** @type {?} */
    Iwe7Base.prototype.eventsEmit;
    /** @type {?} */
    Iwe7Base.prototype.needDestory;
    /** @type {?} */
    Iwe7Base.prototype.cd;
    /** @type {?} */
    Iwe7Base.prototype.memory;
    /** @type {?} */
    Iwe7Base.prototype.__subscribers;
    /** @type {?} */
    Iwe7Base.prototype.__id;
    /** @type {?} */
    Iwe7Base.prototype.__sub;
    /** @type {?} */
    Iwe7Base.prototype.injector;
}
//# sourceMappingURL=base-component.js.map