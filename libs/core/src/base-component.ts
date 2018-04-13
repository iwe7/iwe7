// 给予rxjs设计的组件
import {
  Input,
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef,
  OnInit,
  OnDestroy,
  ɵisObservable,
  Injector
} from '@angular/core';
import {
  Observable,
  merge,
  Subscription,
  BehaviorSubject,
  Subject
} from 'rxjs';
import {
  first,
  filter,
  takeWhile,
  distinctUntilChanged,
  scan,
  takeUntil,
  tap,
  pairwise,
  map
} from 'rxjs/operators';
import { isEqual } from 'underscore';
export abstract class Iwe7Base<T> implements OnChanges, OnInit, OnDestroy {
  // 保存最新值
  public _props: T;
  // 保存关联组件
  public instance: Iwe7Base<T>;
  @Input() props: BehaviorSubject<T> = new BehaviorSubject({} as T);
  // 监听组件事件流
  __events: Subject<{
    type: string;
    selector?: string;
    data?: any;
  }> = new Subject();
  // 需要注销开关
  needDestory: boolean = false;
  subscription: Subscription;
  id: any = new Date().getTime();
  public cd: ChangeDetectorRef;
  constructor(public injector: Injector) {
    this.cd = this.injector.get(ChangeDetectorRef);
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('props' in changes) {
      if (!changes['props'].isFirstChange) {
        this.__propsHandler();
      }
    }
  }
  /**
   * 注销
   */
  ngOnDestroy() {
    this.needDestory = true;
  }

  ngOnInit() {
    this.__propsHandler();
  }

  setProps(props: BehaviorSubject<T>) {
    this.props = props;
    this.__propsHandler();
  }

  setData(res: T) {
    this.props.next({ ...(this._props as any), ...(res as any) });
  }

  __propsHandler() {
    this.subscription && this.subscription.unsubscribe();
    if (!ɵisObservable(this.props)) {
      this.props = new BehaviorSubject(this.props);
    }
    this.subscription = this.props.subscribe(res => {
      this._props = res;
      this.onPropsChange(res);
      this.cd.detectChanges();
    });
  }

  getProps() {
    return this._props;
  }

  __getUuid() {
    let d = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      let r = ((d + Math.random() * 16) % 16) | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
    return uuid;
  }

  public abstract onPropsChange(res: T): void;
}
