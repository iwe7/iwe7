import {
  Component,
  Input,
  ElementRef,
  Renderer2,
  HostBinding
} from '@angular/core';

@Component({
  selector: 'nz-content',
  preserveWhitespaces: false,
  template: `
    <ng-content></ng-content>
  `,
  host: {
    '[class.ant-layout-content]': 'true'
  }
})
export class NzContentComponent {
  @HostBinding('class.nz-content-row') row: boolean;
  @HostBinding('class.nz-content-column') column: boolean;
  @Input()
  @HostBinding('class.nz-content-scroll') scroll: boolean;

  @Input()
  set direction(val: string) {
    if (val === 'row') {
      this.row = true;
      this.column = false;
    }
    if (val === 'column') {
      this.row = false;
      this.column = true;
    }
  }

  constructor(public ele: ElementRef, public render: Renderer2) {}
}
