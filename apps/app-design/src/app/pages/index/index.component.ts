import {
  Component,
  OnInit,
  ViewContainerRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LazyLoaderService } from 'iwe7/lazy-load';
import { Iwe7DesignSettingBase } from 'iwe7/design';
import { UuidService } from 'iwe7-core/src/uuid.service';
import { ActivatedRoute } from '@angular/router';

import { data } from '../../data/data';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, AfterViewInit {
  // 组合组件数据源
  designGroup: BehaviorSubject<any> = new BehaviorSubject({});
  // 组合组件数据源
  designPage: BehaviorSubject<any> = new BehaviorSubject({});
  // 组合组件数据源
  designForm: BehaviorSubject<any> = new BehaviorSubject({});

  instance: any;

  name: string;
  view: ViewContainerRef;
  constructor(
    public lazyload: LazyLoaderService,
    public uuid: UuidService,
    public _view: ViewContainerRef,
    public route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(res => {
      let { t } = res;
      if (t) {
        this.name = t;
      } else {
        this.name = 'iwe7-welcome-index';
      }
      this._view.clear();
      this.load();
    });
  }
  ngOnInit() {}

  ngAfterViewInit() {
    this.load();
  }

  load() {
    this.designGroup.next([data[this.name].props]);
    if (!this.instance) {
      if (this.view) {
        this.lazyload
          .createComponent('design-page', this.view)
          .subscribe((instance: Iwe7DesignSettingBase<any>) => {
            if (instance) {
              instance.setProps(this.designGroup);
              this.instance = instance;
            }
          });
      }
    }
  }

  setViewRef(e) {
    this.view = e;
  }
}
