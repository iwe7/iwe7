import {
  Component,
  OnInit,
  NgModuleFactoryLoader,
  ElementRef,
  ViewContainerRef,
  ViewChild,
  TemplateRef
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LazyLoaderService } from 'iwe7/lazy-load';
import { GetViewRefDirective } from 'iwe7/core';
import { Observable, Subject, animationFrameScheduler, generate } from 'rxjs';

import { defaultIfEmpty, mergeMap } from 'rxjs/operators';
import { RxjsModel, IndexDb } from 'iwe7/rxjs';
import { interval, from } from 'rxjs';
import { switchMap, delayWhen, tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  props: Subject<any> = new Subject();

  width: Observable<any>;
  height: Observable<any>;

  interval$: any;

  constructor(public ele: ElementRef) {}

  // imeepos
  // takeUntil
  ngOnInit() {
    this.interval$ = from('imeepos').pipe(
      //延时
      mergeMap(res => interval(1000)),
      // map(res => interval(1000)),
      delayWhen(() => interval(1000)),
      tap(res => console.log(res))
    );
    // this.interval$ = interval(1000).pipe();
  }

  swipeMove(e: string) {
    console.log(e);
  }
}
