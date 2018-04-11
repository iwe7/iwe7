import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Iwe7DesignSettingBase } from '../iwe7-design';
import { FormBuilder } from '@angular/forms';
import * as _ from 'underscore';
@Component({
  selector: 'design-setting-default',
  templateUrl: './design-setting-default.component.html',
  styleUrls: ['./design-setting-default.component.scss']
})
export class DesignSettingDefaultComponent extends Iwe7DesignSettingBase<any>
  implements OnInit {
  keys: any[];
  index: number = 0;
  constructor(cd: ChangeDetectorRef, fb: FormBuilder) {
    super(cd, fb);
  }

  onPropsChange(res: any) {
    super.onPropsChange(res);
    // 第一次是默认 第二次为初始化
    if (this.index < 2) {
      this.keys = _.map(res, (item, index) => {
        return index;
      });
      this.index ++;
    }
  }
}
