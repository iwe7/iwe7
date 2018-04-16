import {
  Component,
  OnInit,
  ViewContainerRef,
  ChangeDetectorRef,
  Injector
} from '@angular/core';
import { Router } from '@angular/router';
import { LazyLoaderService } from 'iwe7/lazy-load';
import { Iwe7Base } from 'iwe7/core';
import { DesignAndPreviewService } from 'iwe7/design';
let defaultColor = {
  hex: '#194d33',
  hsl: {
    h: 150,
    s: 0.5,
    l: 0.2,
    a: 1
  },
  hsv: {
    h: 150,
    s: 0.66,
    v: 0.3,
    a: 1
  },
  rgba: {
    r: 25,
    g: 77,
    b: 51,
    a: 1
  },
  a: 1
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends Iwe7Base<any> implements OnInit {
  constructor(
    public injector: Injector,
    public designAndPreview: DesignAndPreviewService
  ) {
    super(injector);
  }
  ngOnInit() {
    this.props.next({
      colors: defaultColor
    });
    // 创建表单
    this.designAndPreview.init('nz-switch');
    super.ngOnInit();
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
