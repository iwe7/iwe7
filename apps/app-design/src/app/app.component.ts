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
import { MeepoRender, LokiPageDataService, LokiPageService } from 'iwe7/render';
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
import {
  AppPreviewService,
  ActionsService,
  AddonsInstallService
} from 'iwe7/base';
import { ActivatedRoute, Router } from '@angular/router';
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
    public cd: ChangeDetectorRef,
    public appPreview: AppPreviewService,
    public action: ActionsService,
    public page: LokiPageService,
    public route: ActivatedRoute,
    public addons: AddonsInstallService,
    public ele: ElementRef,
    public rootView: ViewContainerRef,
    public router: Router
  ) {
    this.route.queryParams.subscribe(res => {
      let { pid } = res;
      if (pid) {
        this._render
          .showElement(
            {
              title: '页面一',
              $loki: pid,
              selector: 'base-page'
            },
            {},
            {},
            this.view
          )
          .subscribe((res: any) => {
            res.subscribe(item => {
              this.handler(res);
            });
          });
      }
    });
    this._render.update$.subscribe(res => {
      this.setRem();
    });
  }

  ngOnInit() {
    this._render.setDefaultView(this.rootView);
    this.appPreview.install();
    this.appPreview.addPage();
    this.setRem();
    fromEvent(window, 'resize').subscribe(res => {
      this.setRem();
    });
    let has = true;
    setInterval(() => {
      if(has){
        this.router.navigateByUrl('test');
        has = false;
      }else{
        this.router.navigateByUrl('test2');
        has = true;
      }
    }, 2000);
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
