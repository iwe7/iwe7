import {
  NgModule,
  Component,
  ChangeDetectorRef,
  ElementRef,
  Renderer2,
  HostBinding,
  OnInit,
  ViewChild,
  AfterViewInit,
  Injector,
  ViewEncapsulation,
  ViewContainerRef
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyComponentModuleBase } from 'iwe7/lazy-load';
import { DesignBase } from 'iwe7/design';

import { BehaviorSubject, fromEvent } from 'rxjs';
import {
  map,
  tap,
  takeUntil,
  skipUntil,
  switchMap,
  mergeMap,
  concatMap
} from 'rxjs/operators';

import { IcssService } from 'iwe7/icss';
import { LazyLoaderService } from 'iwe7/lazy-load';
import { DesignDragDataService } from 'iwe7/design';
import { Iwe7ColorsService, ZIndexService } from 'iwe7/themes';
import { CacheMemoryService } from 'iwe7/cache';
import { Router } from '@angular/router';
@Component({
  selector: 'design-antd',
  templateUrl: './design-antd.html',
  styleUrls: ['./design-antd.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DesignAntd extends DesignBase<any>
  implements OnInit, AfterViewInit {
  list: any = [];
  constructor(
    cd: ChangeDetectorRef,
    injector: Injector,
    public dragData: DesignDragDataService,
    public colors: Iwe7ColorsService,
    public zindex: ZIndexService,
    public router: Router
  ) {
    super(injector);
    this.list = this.router.config;
  }
  ngOnInit() {}
  onPropsChange(res: any) {}
  ngAfterViewInit() {
    this.props.subscribe(res => {
      console.log(res);
    });
  }
  setViewRef2(e) {
    let data = this.router.config.map(res => {
      res['title'] = res.path;
      if (res.children) {
        res.children.map(item => {
          item['title'] = item.path;
          item['key'] = item.path;
        });
      }
      return res;
    });
    let props = {
      selector: 'nz-tree',
      nzDraggable: true,
      nzTreeData: data
    };
    this.loader
      .load('nz-tree', e, props, (evt: any) => {
        this.__events.next(evt);
      })
      .pipe(
        // tap
        tap(res => console.log(res))
      )
      .subscribe();
  }
  previewRef: ViewContainerRef;
  setPreviewRef2(e) {
    this.previewRef = e;
  }
}
import { Iwe7CoreModule } from 'iwe7/core';

@NgModule({
  imports: [CommonModule, Iwe7CoreModule],
  declarations: [DesignAntd],
  entryComponents: [DesignAntd]
})
export class DesignAntdModule extends LazyComponentModuleBase {
  getComponentByName(key: string) {
    return DesignAntd;
  }
}
