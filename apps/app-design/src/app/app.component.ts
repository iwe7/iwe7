import {
  Component,
  OnInit,
  ViewContainerRef,
  ChangeDetectorRef,
  Injector,
  ViewChild,
  AfterViewInit,
  ElementRef,
  HostBinding
} from '@angular/core';
import { MeepoRender, LokiPageDataService } from 'iwe7/render';
import {
  Subject,
  BehaviorSubject,
  from,
  merge,
  Observable,
  fromEvent
} from 'rxjs';
import {
  tap,
  map,
  switchMap,
  takeLast,
  debounceTime,
  take
} from 'rxjs/operators';
import { AddonsInstallService } from 'iwe7/base';
import { parseURL } from 'iwe7/we7-location';
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
  constructor(
    public _render: MeepoRender,
    public addons: AddonsInstallService,
    public ele: ElementRef,
    public rootView: ViewContainerRef
  ) {
    this._render.update$.subscribe(res => {
      this.setRem();
    });
  }

  ngOnInit() {
    this.setRem();
    fromEvent(window, 'resize').subscribe(res => {
      this.setRem();
    });
  }
  _width: number;
  get width() {
    return this._width;
  }
  set width(val: number) {
    this._width = val;
    let designWidth = 750;
    let rem = val * 100 / designWidth;
    document.documentElement.style['font-size'] = rem + 'px';
    document.body.style.fontSize = '14px';
  }

  setRem() {
    if (this.ele) {
      setTimeout(() => {
        this.width = this.ele.nativeElement.clientWidth;
      }, 100);
    }
  }

  handler(res) {
    setTimeout(() => {
      console.log(res);
    }, 0);
  }
}
