import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Iwe7DesignBase } from 'iwe7/design';
@Component({
  selector: 'i[anticon]',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.less']
})
export class IconComponent extends Iwe7DesignBase<any> implements OnInit {
  constructor(cd: ChangeDetectorRef) {
    super(cd);
  }
  onPropsChange(res: any) {}
}
