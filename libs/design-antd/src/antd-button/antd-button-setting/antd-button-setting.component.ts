import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AntdButtonSettingProps } from '../props';
import { Iwe7DesignSettingBase } from 'iwe7/design';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'antd-button-setting',
  templateUrl: './antd-button-setting.component.html',
  styleUrls: ['./antd-button-setting.component.scss']
})
export class AntdButtonSettingComponent extends Iwe7DesignSettingBase<
  AntdButtonSettingProps
> implements OnInit {
  constructor(cd: ChangeDetectorRef, fb: FormBuilder) {
    super(cd, fb);
  }
}
