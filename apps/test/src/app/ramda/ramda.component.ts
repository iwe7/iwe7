import {
  Component,
  OnInit,
  OnDestroy,
  ViewContainerRef,
  ComponentFactoryResolver
} from '@angular/core';
import { Subject, merge, timer, interval } from 'rxjs';
import { takeUntil, filter, map, startWith } from 'rxjs/operators';
import { BaseTestComponent } from 'iwe7/core/src/base-test/base-test.component';

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
    const pinjector = this.view.parentInjector;
    const elInjector = this.view.parentInjector;
    const componentFactoryResolver = elInjector.get(ComponentFactoryResolver);
    const componentFactory = componentFactoryResolver.resolveComponentFactory(
      BaseTestComponent
    );
    const componentRef = this.view.createComponent(componentFactory);
    // 保存一下，方便后面使用
    const componentInstance = componentRef.instance as any;
    console.log(componentInstance);
    componentInstance.setProps(
      this.sub2.asObservable().pipe(
        startWith({
          a: 1,
          b: 2,
          c: 3
        })
      )
    );
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
