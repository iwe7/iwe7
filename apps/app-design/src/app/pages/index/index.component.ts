import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LazyLoaderService } from 'iwe7/lazy-load';
import { Iwe7DesignSettingBase } from 'iwe7/design';
import { UuidService } from 'iwe7-core/src/uuid.service';

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
    public view: ViewContainerRef,
    public uuid: UuidService
  ) {}
  ngOnInit() {
    // this.designGroup.next({
    //   view: 'iwe7-welcome-index',
    //   text: '你好，iwe7!',
    //   desc: '双击探索'
    // });
    this.designGroup.next([
      new BehaviorSubject({
        view: 'nz-calendar',
        nzMode: 'month',
        nzFullscreen: true,
        nzCard: false,
        _uid: this.uuid.get(),
        content: new BehaviorSubject({
          view: 'nz-button',
          _uid: this.uuid.get(),
          content: new BehaviorSubject({
            view: 'nz-button',
            _uid: this.uuid.get(),
            name: 'shrink',
            content: new BehaviorSubject({
              view: 'nz-button',
              text: '双击探索',
              _uid: this.uuid.get()
            })
          }),
          text: '双击探索',
          nzGhost: true,
          nzLoading: false,
          nzSize: 'small',
          nzType: 'default',
          nzShape: ''
        })
      })
    ]);
    if (!this.instance) {
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
