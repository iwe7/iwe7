// 给予rxjs设计的组件
import {
  Input,
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef,
  OnInit,
  OnDestroy,
  ɵisObservable
} from '@angular/core';
import { Observable, merge, Subscription, BehaviorSubject } from 'rxjs';
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
import * as _ from 'underscore';
export abstract class Iwe7Base<T> implements OnChanges, OnInit, OnDestroy {
  // 保存最新值
  public _props: T;
  // 保存关联组件
  public instance: Iwe7Base<T>;
  @Input() props: BehaviorSubject<T> = new BehaviorSubject({} as T);
  // 需要注销开关
  needDestory: boolean = false;
  subscription: Subscription;
  id: any = new Date().getTime();
  constructor(public cd: ChangeDetectorRef) {}

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
    if(!ɵisObservable(this.props)){
      this.props = new BehaviorSubject(this.props)
    }
    this.subscription = this.props
      .pipe(
        // 去重复
        distinctUntilChanged((x, y) => {
          return _.isEqual(x, y);
        })
      )
      .subscribe(res => {
        this._props = res;
        this.onPropsChange(res);
        this.cd.markForCheck();
      });
  }

  getProps() {
    return this._props;
  }

  public abstract onPropsChange(res: T): void;
}
