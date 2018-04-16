import { Component, Injector } from '@angular/core';
import { DesignBase } from 'iwe7/design';

@Component({
  selector: 'nz-layout',
  preserveWhitespaces: false,
  template: `
    <ng-content></ng-content>
  `,
  host: {
    '[class.ant-layout]': 'true',
    '[class.ant-layout-has-sider]': 'hasSider'
  }
})
export class NzLayoutComponent extends DesignBase<any> {
  hasSider = false;
  constructor(injector: Injector) {
    super(injector);
  }
  onPropsChange(e) {}
}
