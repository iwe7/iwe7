import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Iwe7DesignBase } from 'iwe7/design';

export class ButtonProps {}
@Component({
  selector: 'iwe7-button-setting',
  templateUrl: './iwe7-button-setting.html',
  styleUrls: ['./iwe7-button-setting.scss']
})
export class Iwe7ButtonSettingDesign extends Iwe7DesignBase<ButtonProps> {
  constructor(cd: ChangeDetectorRef) {
    super(cd);
  }
  onPropsChange(props: ButtonProps) {}
}
