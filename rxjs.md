> 最近做项目用 rxjs 老觉得理解的不够通车，所以决定花时间研读 rxjs 源码!

## 源码目录结构

### ajax

### internal-compatibility

### internal

* Subscription

```ts
import { SubscriptionLike, TeardownLogic } from './types';
export declare class Subscription implements SubscriptionLike {
  static EMPTY: Subscription;
  closed: boolean;
  constructor(unsubscribe?: () => void);
  // 取消订阅
  unsubscribe(): void;
  // 添加
  add(teardown: TeardownLogic): Subscription;
  // 移除
  remove(subscription: Subscription): void;
}
```

* Subscriber

```ts
import { Observer, PartialObserver } from './types';
import { Subscription } from './Subscription';
export declare class Subscriber<T> extends Subscription implements Observer<T> {
  // 创建 Subscriber
  static create<T>(
    next?: (x?: T) => void,
    error?: (e?: any) => void,
    complete?: () => void
  ): Subscriber<T>;
  constructor(
    destinationOrNext?: PartialObserver<any> | ((value: T) => void),
    error?: (e?: any) => void,
    complete?: () => void
  );
  // 发射一个值
  next(value?: T): void;
  // 抛出错误
  error(err?: any): void;
  // 完成
  complete(): void;
  // 取消订阅
  unsubscribe(): void;
}
```

* Observable

```ts
import { Operator } from './Operator';
import { Subscriber } from './Subscriber';
import { Subscription } from './Subscription';
import { TeardownLogic } from './types';
import { iif } from './observable/iif';
import { throwError } from './observable/throwError';
import {
  OperatorFunction,
  PartialObserver,
  Subscribable
} from '../internal/types';
export declare class Observable<T> implements Subscribable<T> {
  _isScalar: boolean;
  constructor(
    subscribe?: (
      this: Observable<T>,
      subscriber: Subscriber<T>
    ) => TeardownLogic
  );
  static create: Function;
  lift<R>(operator: Operator<T, R>): Observable<R>;
  subscribe(observer?: PartialObserver<T>): Subscription;
  subscribe(
    next?: (value: T) => void,
    error?: (error: any) => void,
    complete?: () => void
  ): Subscription;
  forEach(
    next: (value: T) => void,
    promiseCtor?: PromiseConstructorLike
  ): Promise<void>;
  static if: typeof iif;
  static throw: typeof throwError;
  pipe<R>(...operations: OperatorFunction<T, R>[]): Observable<R>;
  toPromise<T>(
    this: Observable<T>,
    PromiseCtor: PromiseConstructorLike
  ): Promise<T>;
}
```

* ConnectableObservable

```ts
export declare class ConnectableObservable<T> extends Observable<T> {
  _isComplete: boolean;
  constructor(source: Observable<T>, subjectFactory: () => Subject<T>);
  connect(): Subscription;
  refCount(): Observable<T>;
}
```

* Operator

```ts
import { Subscriber } from './Subscriber';
import { TeardownLogic } from './types';
export interface Operator<T, R> {
  call(subscriber: Subscriber<R>, source: any): TeardownLogic;
}
```

* Subject

```ts
export declare class Subject<T> extends Observable<T>
  implements SubscriptionLike {
  observers: Observer<T>[];
  closed: boolean;
  isStopped: boolean;
  hasError: boolean;
  thrownError: any;
  constructor();
  /**@nocollapse */
  static create: Function;
  lift<R>(operator: Operator<T, R>): Observable<R>;
  next(value?: T): void;
  error(err: any): void;
  complete(): void;
  unsubscribe(): void;
  asObservable(): Observable<T>;
}
```

* BehaviorSubject

```ts
export declare class BehaviorSubject<T> extends Subject<T> {
  constructor(_value: T);
  readonly value: T;
  getValue(): T;
  next(value: T): void;
}
```

* ReplaySubject

```ts
export declare class ReplaySubject<T> extends Subject<T> {
  constructor(
    bufferSize?: number,
    windowTime?: number,
    scheduler?: SchedulerLike
  );
  _getNow(): number;
}
```

* AsyncSubject

```ts
export declare class AsyncSubject<T> extends Subject<T> {
  next(value: T): void;
  error(error: any): void;
  complete(): void;
}
```

* Scheduler

```ts
export declare class Scheduler implements SchedulerLike {
  static now: () => number;
  constructor(SchedulerAction: typeof Action, now?: () => number);
  now: () => number;
  schedule<T>(
    work: (this: SchedulerAction<T>, state?: T) => void,
    delay?: number,
    state?: T
  ): Subscription;
}
```
- Notification
```ts
export declare class Notification<T> {
  kind: string;
  value: T;
  error: any;
  hasValue: boolean;
  constructor(kind: string, value?: T, error?: any);
  observe(observer: PartialObserver<T>): any;
  do(
    next: (value: T) => void,
    error?: (err: any) => void,
    complete?: () => void
  ): any;
  accept(
    nextOrObserver: PartialObserver<T> | ((value: T) => void),
    error?: (err: any) => void,
    complete?: () => void
  ): any;
  toObservable(): Observable<T>;
  static createNext<T>(value: T): Notification<T>;
  static createError<T>(err?: any): Notification<T>;
  static createComplete(): Notification<any>;
}
```

### operators

### testing

### websocket

### index.ts

> 入口文件，导出一堆东西

```ts
/* Observable */
export { Observable } from './internal/Observable';
export {
  ConnectableObservable
} from './internal/observable/ConnectableObservable';
export { Operator } from './internal/Operator';
export { observable } from './internal/symbol/observable';

/* Subjects */
export { Subject } from './internal/Subject';
export { BehaviorSubject } from './internal/BehaviorSubject';
export { ReplaySubject } from './internal/ReplaySubject';
export { AsyncSubject } from './internal/AsyncSubject';

/* Schedulers */
export { asap as asapScheduler } from './internal/scheduler/asap';
export { async as asyncScheduler } from './internal/scheduler/async';
export { queue as queueScheduler } from './internal/scheduler/queue';
export {
  animationFrame as animationFrameScheduler
} from './internal/scheduler/animationFrame';
export {
  VirtualTimeScheduler,
  VirtualAction
} from './internal/scheduler/VirtualTimeScheduler';
export { Scheduler } from './internal/Scheduler';

/* Subscription */
export { Subscription } from './internal/Subscription';
export { Subscriber } from './internal/Subscriber';

/* Notification */
export { Notification } from './internal/Notification';

/* Utils */
export { pipe } from './internal/util/pipe';
export { noop } from './internal/util/noop';
export { identity } from './internal/util/identity';

/* Error types */
export {
  ArgumentOutOfRangeError
} from './internal/util/ArgumentOutOfRangeError';
export { EmptyError } from './internal/util/EmptyError';
export {
  ObjectUnsubscribedError
} from './internal/util/ObjectUnsubscribedError';
export { UnsubscriptionError } from './internal/util/UnsubscriptionError';
export { TimeoutError } from './internal/util/TimeoutError';

/* Static observable creation exports */
export { bindCallback } from './internal/observable/bindCallback';
export { bindNodeCallback } from './internal/observable/bindNodeCallback';
export { combineLatest } from './internal/observable/combineLatest';
export { concat } from './internal/observable/concat';
export { defer } from './internal/observable/defer';
export { empty } from './internal/observable/empty';
export { forkJoin } from './internal/observable/forkJoin';
export { from } from './internal/observable/from';
export { fromEvent } from './internal/observable/fromEvent';
export { fromEventPattern } from './internal/observable/fromEventPattern';
export { generate } from './internal/observable/generate';
export { iif } from './internal/observable/iif';
export { interval } from './internal/observable/interval';
export { merge } from './internal/observable/merge';
export { never } from './internal/observable/never';
export { of } from './internal/observable/of';
export { onErrorResumeNext } from './internal/observable/onErrorResumeNext';
export { pairs } from './internal/observable/pairs';
export { race } from './internal/observable/race';
export { range } from './internal/observable/range';
export { throwError } from './internal/observable/throwError';
export { timer } from './internal/observable/timer';
export { using } from './internal/observable/using';
export { zip } from './internal/observable/zip';

/* Constants */
export { EMPTY } from './internal/observable/empty';
export { NEVER } from './internal/observable/never';

/* Types */
export * from './internal/types';

/* Config */
export { config } from './internal/config';
```
