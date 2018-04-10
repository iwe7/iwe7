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

import { defaultIfEmpty } from 'rxjs/operators';
import { RxjsModel, IndexDb } from 'iwe7/rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  props: Subject<any> = new Subject();

  width: Observable<any>;
  height: Observable<any>;

  constructor(public ele: ElementRef) {}

  ngOnInit() {}

  swipeMove(e: string) {
    console.log(e);
  }
}
