import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Iwe7DesignBase } from 'iwe7/design';
import { AntdButtonProps } from '../props';
@Component({
  selector: 'antd-button',
  templateUrl: './antd-button.component.html',
  styleUrls: ['./antd-button.component.scss']
})
export class AntdButtonComponent extends Iwe7DesignBase<AntdButtonProps>
  implements OnInit {
  constructor(cd: ChangeDetectorRef) {
    super(cd);
  }

  onPropsChange(res: AntdButtonProps) {
    // console.log(res)
  }

  getDefault() {
    return new AntdButtonProps();
  }

  isSetting() {
    return false;
  }
}
