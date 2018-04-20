import { NgModule } from '@angular/core';
import { SpinComponent } from './spin';
import { NzAlertModule } from 'iwe7/antd/alert';
import { NzSpinModule } from 'iwe7/antd/spin';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'iwe7/shared';
@NgModule({
  imports: [CommonModule, SharedModule, NzAlertModule, NzSpinModule],
  declarations: [SpinComponent],
  entryComponents: [SpinComponent]
})
export class SpinModule {
  get(key: string) {
    return SpinComponent;
  }
}
