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
import { MeepoRender, LokiPageDataService, LokiPageService } from 'iwe7/render';
import { Subject, BehaviorSubject, from, merge, Observable } from 'rxjs';
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
import { ActivatedRoute } from '@angular/router';
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
    public addons: AddonsInstallService
  ) {
    this.route.queryParams.subscribe(res => {
      let { pid } = res;
      if (pid) {
        this._render
          .showElement(
            {
              title: '页面一',
              code: 'base-page-1',
              selector: 'base-page'
            },
            {},
            {}
          )
          .subscribe((res: any) => {
            res.subscribe(item => {
              this.handler(res);
            });
          });
      }
    });
  }
  ngOnInit() {
    this._render.setDefaultView(this.view);
    this.appPreview.install();
    this.appPreview.addPage();
  }

  handler(res) {
    console.log(res);
  }
}
