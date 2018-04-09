import {
  Component,
  OnInit,
  OnDestroy,
  ViewContainerRef,
  ComponentFactoryResolver
} from '@angular/core';
import { Subject, merge, timer, interval } from 'rxjs';
import { takeUntil, filter, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'ramda',
  templateUrl: './ramda.component.html',
  styleUrls: ['./ramda.component.scss']
})
export class RamdaComponent implements OnInit, OnDestroy {
  // 某订阅事件1
  sub: Subject<any> = new Subject();
  // 某订阅事件2
  sub2: Subject<any> = new Subject();
  // 某订阅事件3
  sub3: Subject<any> = new Subject();
  // 某订阅事件4
  sub4: Subject<any> = new Subject();
  // 需要取消订阅开关
  needDestory: boolean = false;
  constructor(public view: ViewContainerRef) {
    let i = 0;
    setInterval(() => {
      console.log('interval');
      this.sub2.next({
        a: i++,
        b: i++,
        c: i++
      });
    }, 1000);
  }

  ngOnDestroy() {
    this.needDestory = true;
  }

  ngOnInit() {}

  log(msg) {
    // console.log(msg);
  }
}
