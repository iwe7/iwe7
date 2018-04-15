import {
  Component,
  OnInit,
  ViewContainerRef,
  ChangeDetectorRef,
  Injector,
  ɵCodegenComponentFactoryResolver
} from '@angular/core';
import { Router } from '@angular/router';
import { data } from './data/data';
import { _drop, _drag } from './data/_drop';
import { elementAdd } from './data/element-add';
import { LazyLoaderService } from 'iwe7/lazy-load';

import { Iwe7Base, KeyValue } from 'iwe7/core';
import { DesignDragDataService } from 'iwe7/design';
import { flatten, clone } from 'underscore';
import { Iwe7ColorsService } from 'iwe7/themes/index';
import { SortableOptions } from 'iwe7/sortable';
import { data as data2 } from 'iwe7/design-helper';

import { BehaviorSubject, from, of, Subject } from 'rxjs';
import { tap, map, filter, flatMap, takeLast } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DesignAndPreviewService } from 'iwe7/design';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends Iwe7Base<any> implements OnInit {
  list: any[] = data2['nz-rate'].fields;
  constructor(
    public load: LazyLoaderService,
    public injector: Injector,
    public designAndPreview: DesignAndPreviewService
  ) {
    super(injector);
  }

  ngOnInit() {
    // 创建表单
    this.designAndPreview.init('nz-switch');
  }

  setAntdView(e) {
    // 更新视图数据
    this.designAndPreview.setViewRef(e);
  }

  setFormView(e) {
    // 表单项目
    this.designAndPreview.setFormRef(e);
  }
}
