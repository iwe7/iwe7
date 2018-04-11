import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LazyLoaderService } from 'iwe7/lazy-load';
import { Iwe7DesignSettingBase } from 'iwe7/design';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  // 组合组件数据源
  designGroup: BehaviorSubject<any> = new BehaviorSubject({});
  // 组合组件数据源
  designPage: BehaviorSubject<any> = new BehaviorSubject({});
  // 组合组件数据源
  designForm: BehaviorSubject<any> = new BehaviorSubject({});

  instance: any;
  constructor(
    public lazyload: LazyLoaderService,
    public view: ViewContainerRef
  ) {}
  ngOnInit() {
    this.designGroup.next({
      view: 'nz-button',
      text: 'i am a button'
    });
    if (!this.instance) {
      this.lazyload
        .createComponent('design-group', this.view)
        .subscribe((instance: Iwe7DesignSettingBase<any>) => {
          if (instance) {
            instance.setProps(this.designGroup);
            this.instance = instance;
          }
        });
    }
  }
}
