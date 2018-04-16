import { Component, OnInit, Injector } from '@angular/core';
import { DesignBase } from '../design-base/design-base';
import { DesignAndPreviewService } from '../design-and-preview.service';
import { LazyLoaderService } from 'iwe7/lazy-load';
@Component({
  selector: 'design-layout',
  templateUrl: './design-layout.html'
})
export class DesignLayoutComponent extends DesignBase<any> implements OnInit {
  constructor(
    i: Injector,
    public designAndPreview: DesignAndPreviewService,
    public load: LazyLoaderService
  ) {
    super(i);
  }

  ngOnInit() {
    this.designAndPreview.init('nz-layout');
    super.ngOnInit();
  }

  setFormView(e) {
    this.designAndPreview.setViewRef(e);
  }

  setPreiveView(e) {
    this.designAndPreview.setFormRef(e);
    this.load
      .load(
        this._props.name,
        e,
        {
          selector: 'nz-layout',
          props: [
            {
              selector: 'nz-layout',
              width: 25,
              height: 100
            },
            {
              selector: 'nz-layout',
              width: 75,
              height: 100
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
}
