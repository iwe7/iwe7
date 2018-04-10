// 给予rxjs设计的组件
import {
  Input,
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Observable, merge, Subscription } from 'rxjs';
import {
  first,
  filter,
  takeWhile,
  distinctUntilChanged,
  scan,
  takeUntil,
  tap
} from 'rxjs/operators';
import * as _ from 'underscore';
export abstract class Iwe7Base<T> implements OnChanges, OnInit, OnDestroy {
  public _props: T;
  @Input() props: Observable<T> = new Observable();
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

  setProps(props: Observable<T>) {
    this.props = props;
    this.__propsHandler();
  }

  __propsHandler() {
    this.subscription && this.subscription.unsubscribe();
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
