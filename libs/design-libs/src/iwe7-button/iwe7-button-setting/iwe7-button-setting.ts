import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Iwe7DesignBase } from 'iwe7/design';
import { Iwe7ButtonProps } from '../props';
@Component({
  selector: 'iwe7-button-setting',
  templateUrl: './iwe7-button-setting.html',
  styleUrls: ['./iwe7-button-setting.scss']
})
export class Iwe7ButtonSettingDesign extends Iwe7DesignBase<Iwe7ButtonProps> {
  constructor(cd: ChangeDetectorRef) {
    super(cd);
  }
  onPropsChange(props: Iwe7ButtonProps) {}

  getDefault() {
    return new Iwe7ButtonProps();
  }

  isSetting() {
    return true;
  }
}
