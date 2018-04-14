import { Component, Input } from '@angular/core';
import { NzUpdateHostClassService } from 'iwe7/core';
import { toBoolean } from '../core/util/convert';
import { NzColComponent } from '../grid/nz-col.component';

@Component({
  selector: 'nz-form-label',
  providers: [NzUpdateHostClassService],
  preserveWhitespaces: false,
  template: `
    <label [attr.for]="nzFor" [class.ant-form-item-required]="nzRequired">
      {{(props|async)?.text}}
      <ng-content></ng-content><ng-container (getViewRef)="setViewRef($event)"></ng-container>
    </label>`,
  host: {
    '[class.ant-form-item-label]': 'true'
  }
})
export class NzFormLabelComponent extends NzColComponent {
  @Input() nzFor: string;
  private _required = false;

  @Input()
  set nzRequired(value: boolean) {
    this._required = toBoolean(value);
  }

  onPropsChange(e: any) {
    if ('nzRequired' in e) {
      this.nzRequired = e['nzRequired'];
    }
    if ('nzFor' in e) {
      this.nzFor = e['nzFor'];
    }
    super.onPropsChange(e);
  }

  get nzRequired(): boolean {
    return this._required;
  }
}
