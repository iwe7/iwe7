import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Iwe7DesignBase } from 'iwe7/design';
@Component({
  selector: 'design-page-add',
  templateUrl: './design-page-add.component.html',
  styleUrls: ['./design-page-add.component.scss']
})
export class DesignPageAddComponent extends Iwe7DesignBase<any>
  implements OnInit {
  constructor(cd: ChangeDetectorRef) {
    super(cd);
  }

  ngOnInit() {}

  onPropsChange(res: any) {}
}
