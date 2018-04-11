import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AntdButtonProps, AntdButtonSettingProps } from 'iwe7/design-antd';
class IndexProps {
  props: any[] = [new AntdButtonProps()];
}
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
  constructor() {}
  ngOnInit() {
    this.designGroup.next({
      view: 'nz-button',
      setting: 'design-button-setting',
      text: 'i am a button',
      ...new AntdButtonProps()
    });
  }
}
