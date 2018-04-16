import {
  Component,
  OnInit,
  ViewContainerRef,
  ChangeDetectorRef,
  Injector
} from '@angular/core';
import { Router } from '@angular/router';
import { LazyLoaderService } from 'iwe7/lazy-load';
import { DesignBase } from 'iwe7/design';
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
export class AppComponent extends DesignBase<any> implements OnInit {
  constructor(
    public injector: Injector,
    public designAndPreview: DesignAndPreviewService
  ) {
    super(injector);
  }
  ngOnInit() {
    // 创建表单
    this.designAndPreview.init('nz-layout');
    super.ngOnInit();
  }
  setAntdView(e) {
    // 更新视图数据
    // this.designAndPreview.setViewRef(e);
    this.loader
      .load(
        'nz-layout',
        e,
        {
          selector: 'nz-layout',
          width: 100,
          height: 100,
          backgroundColor: '#ccc',
          direction: 'row',
          allowScroll: true,
          hasHeader: true,
          hasFooter: false,
          props: [
            {
              selector: 'nz-layout',
              width: 25,
              height: 100,
              backgroundColor: '#333'
            },
            {
              selector: 'nz-layout',
              width: 50,
              height: 100,
              backgroundColor: '#efefef'
            },
            {
              selector: 'nz-layout',
              width: 25,
              height: 100,
              backgroundColor: '#333'
            }
          ]
        },
        evt => {
          let { type, data } = evt;
          if (type === 'change') {
            console.log('数据更新了', data);
          }
        }
      )
      .subscribe();
  }
  setFormView(e) {
    // 表单项目
    this.designAndPreview.setFormRef(e);
  }
}
