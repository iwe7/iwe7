// 给予rxjs设计的组件
import {
  Input,
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Observable, merge } from 'rxjs';
import { first, filter, takeWhile } from 'rxjs/operators';

export abstract class Iwe7Base<T> implements OnChanges, OnInit, OnDestroy {
  @Input() props: Observable<T> = new Observable();
  // 需要注销开关
  needDestory: boolean = false;
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
    this.props = merge(this.props, props);
    this.__propsHandler();
  }

  private __propsHandler() {
    this.props = merge(
      // 添加默认值
      this.props.pipe(first((val, idx) => idx === 0, {} as T)),
      this.props
    ).pipe(
      // 去除{}
      filter(val => Object.keys(val).length > 0),
      // 自动注销
      takeWhile(val => !this.needDestory)
    );
    this.props.subscribe(res => {
      this.onPropsChange(res);
      this.cd.markForCheck();
    });
  }

  public abstract onPropsChange(res: T): void;
}
