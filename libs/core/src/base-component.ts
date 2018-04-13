// 给予rxjs设计的组件
import {
  Input,
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef,
  OnInit,
  OnDestroy,
  ɵisObservable,
  Injector,
  HostBinding
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
  map,
  switchMap
} from 'rxjs/operators';
import { isEqual } from 'underscore';
import { CacheMemoryService, SubscribersService } from 'iwe7/cache';
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
  private needDestory: boolean = false;
  public cd: ChangeDetectorRef;
  public memory: CacheMemoryService<any>;
  // 订阅控制器
  public __subscribers: SubscribersService;
  // 系统生成编号
  @HostBinding('attr.data-id') __id: string;

  constructor(public injector: Injector) {
    this.cd = this.injector.get(ChangeDetectorRef);
    this.memory = this.injector.get(CacheMemoryService);
    this.__subscribers = this.injector.get(SubscribersService);
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
    this.__subscribers.destory(this.__id);
    this.props.complete();
    this.needDestory = true;
  }

  ngOnInit() {
    this.__propsHandler();
  }

  setProps(props: BehaviorSubject<T>) {
    this.props = this.props.pipe<T>(switchMap(res => props)) as BehaviorSubject<T>;
    this.__propsHandler();
  }

  setData(res: T) {
    this.props.next({ ...(this._props as any), ...(res as any) });
  }

  __propsHandler() {
    if (!ɵisObservable(this.props)) {
      this.props = new BehaviorSubject(this.props);
    }
    this.props.subscribe(res => {
      this._props = res;
      if ('data-id' in res) {
      } else {
        res['data-id'] = this.__getUuid();
      }
      this.__id = res['data-id'];
      this.memory.set(this.__id, this._props);
      this.onPropsChange(res);
      this.cd.detectChanges();
    });
  }

  getProps() {
    return this._props;
  }

  __addSub(sub: Subscription) {
    this.__subscribers.addSub(this.__id, sub);
  }

  __getUuid() {
    let d = new Date().getTime();
    let uuid = 'meepo.yxxxxxxxxxxxxxxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, c => {
      let r = ((d + Math.random() * 16) % 16) | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
    return uuid;
  }

  public abstract onPropsChange(res: T): void;
}
