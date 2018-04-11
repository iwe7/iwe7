import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';
import {
  fromEvent,
  Observable,
  Subject,
  BehaviorSubject,
  AsyncSubject,
  ReplaySubject,
  Scheduler,
  SchedulerAction,
  SchedulerLike,
  asapScheduler,
  animationFrameScheduler,
  asyncScheduler,
  queueScheduler,
  VirtualTimeScheduler,
  from
} from 'rxjs';

import { TestScheduler } from 'rxjs/testing';

import * as r from 'rxjs';
import * as o from 'rxjs/operators';
import {
  map,
  tap,
  filter,
  distinctUntilChanged,
  startWith,
  scan,
  share,
  publish
} from 'rxjs/operators';

export interface Point2D {
  x: number;
  y: number;
}

export interface Directions {
  [key: number]: Point2D;
}

export const DIRECTIONS: Directions = {
  37: { x: -1, y: 0 }, // 左键
  39: { x: 1, y: 0 }, // 右键
  38: { x: 0, y: -1 }, // 上键
  40: { x: 0, y: 1 } // 下键
};

export const INITIAL_DIRECTION = { x: -1, y: 0 };

@Component({
  selector: 'canvas-full',
  templateUrl: './canvas-full.component.html',
  styleUrls: ['./canvas-full.component.scss']
})
export class CanvasFullComponent implements OnInit {
  @ViewChild('canvas') canvas: ElementRef;
  // keydown 事件 (KeyboardEvent)
  keydown$: Observable<any>;
  // 表示蛇的长度 (Number)
  snakeLength$: Observable<any>;
  // 定时器，表示蛇的速度 (Number)
  tick$: Observable<any>;

  constructor(public ele: ElementRef, public render: Renderer2) {}

  ngOnInit() {
    let arr = [];
    for (let i = 0; i < 1000; i++) {
      arr.push(i);
    }

    let timeStart = Date.now();
    // 默认同步
    from(arr, queueScheduler).subscribe(
      res => {
        console.log(res);
      },
      err => {},
      () => {
        console.log('Total time: ' + (Date.now() - timeStart) + 'ms');
      }
    );
    console.log('next');

    // Observable、Observer、Subscription、Operators、Subject
    // let ctx = this.init();
    // this.keydown$ = fromEvent(document, 'keydown').pipe(
    //   map((res: KeyboardEvent) => DIRECTIONS[res.keyCode]),
    //   filter(direction => !!direction),
    //   startWith(INITIAL_DIRECTION),
    //   scan(this.isEqueDirection),
    //   distinctUntilChanged(),
    //   tap(res => console.log(res))
    // );
    // this.keydown$.subscribe(res => {});
  }

  ext1() {
    // Subject 既是 Observable 对象，又是 Observer 对象
    let s$ = new Subject();
    let s = s$.asObservable();

    // 大意是BehaviorSubject会发送离订阅最近的上一个值，没有上一个值的时候会发送默认值（如果有的话)
    let bs$ = new BehaviorSubject<number>(0);
    let bs = bs$.asObservable();

    // 概括的讲就是使用AsyncSubject无论发送多少个数据事件，观察者永远只能接受到最后一个数据(完成事件必须调用)。如果发送数据过程中出现错误，观察者仅仅接受到错误信息。
    let as$ = new AsyncSubject();
    let as = as$.asObservable();

    // 该Subject会缓存所有的发射数据，无论观察者何时订阅，Subject都会将所有内容发送给订阅者。
    let rs$ = new ReplaySubject();
    let rs = rs$.asObservable();

    let i = 0;
    let time = setInterval(() => {
      if (i > 5) {
        bs$.complete();
        s$.complete();
        as$.complete();
        rs$.complete();
        clearInterval(time);
      }
      i++;
      bs$.next(i);
      s$.next(i);
      as$.next(i);
      rs$.next(i);

      rs.subscribe(res => console.log('ReplaySubject', res)).unsubscribe();
      as.subscribe(res => console.log('AsyncSubject', res)).unsubscribe();
      s.subscribe(res => console.log('Subject', res)).unsubscribe();
      bs.subscribe(res => console.log('BehaviorSubject', res)).unsubscribe();
    }, 1000);
  }

  isEqueDirection(previous: Point2D, next: Point2D) {
    return next.x === previous.x * -1 || next.y === previous.y * -1;
  }

  createCanvasElement() {
    let canvas = this.render.createElement('canvas');
    canvas.width = this.ele.nativeElement.clientWidth;
    canvas.height = this.ele.nativeElement.clientHeight;
    return canvas;
  }

  init() {
    let canvas = this.createCanvasElement();
    let ctx = canvas.getContext('2d');
    this.render.appendChild(this.ele.nativeElement, canvas);
    return ctx;
  }
}
