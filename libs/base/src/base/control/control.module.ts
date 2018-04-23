import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseControl } from './control';
@NgModule({
  imports: [CommonModule],
  declarations: [BaseControl],
  entryComponents: [BaseControl]
})
export class ControlModule {
  get(key: string) {
    return BaseControl;
  }
}
