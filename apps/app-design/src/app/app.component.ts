import {
  Component,
  OnInit,
  ViewContainerRef,
  ChangeDetectorRef,
  Injector,
  ViewChild,
  AfterViewInit,
  ElementRef
} from '@angular/core';
import { MeepoRender } from 'iwe7/render';
import { Subject, BehaviorSubject, from, merge, Observable } from 'rxjs';
import {
  tap,
  map,
  switchMap,
  takeLast,
  debounceTime,
  take
} from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('view', {
    read: ViewContainerRef
  })
  view: ViewContainerRef;
  opt: any = {
    selector: 'base-view',
    outputs: {
      setRoot$: 'setroot'
    }
  };
  constructor(public _render: MeepoRender, public cd: ChangeDetectorRef) {}
  ngOnInit() {
    this.init();
  }

  init() {
    this.view.clear();
    this._render.compiler(this.opt, this.view).subscribe((res: any) => {
      if (res.type === 'setroot') {
        this.opt = res.data;
        this.init();
      }
    });
  }
}
