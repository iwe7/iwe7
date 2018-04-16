import { Component, OnInit, Injector } from '@angular/core';
import { DesignBase } from 'iwe7/design';
@Component({
  selector: 'nz-select-tpl',
  templateUrl: 'nz-select-tpl.html'
})
export class NzSelectTplComponent extends DesignBase<any> implements OnInit {
  nzPlaceHolder: any;
  value: any;
  options: any;
  nzDropdownStyle: any;
  constructor(injector: Injector) {
    super(injector);
  }

  onPropsChange(e: any) {
    if ('nzPlaceHolder' in e) {
      this.nzPlaceHolder = e['nzPlaceHolder'];
    }
    if ('options' in e) {
      this.options = e['options'];
    }
    if ('value' in e) {
      this.value = e['value'];
    }
    if ('nzDropdownStyle' in e) {
      this.nzDropdownStyle = e['nzDropdownStyle'];
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
