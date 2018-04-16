import { Component, OnInit, Injector } from '@angular/core';
import { DesignBase } from 'iwe7/design';
@Component({
  selector: 'nz-layout-tpl',
  templateUrl: './nz-layout-tpl.html',
  styleUrls: ['./nz-layout-tpl.scss']
})
export class NzLayoutTplComponent extends DesignBase<any> implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }

  onPropsChange(e: any) {
    if ('' in e) {
    }
    super.onPropsChange(e);
  }

  change(e) {
    this.__events.next({
      type: 'change',
      data: e
    });
  }
}
