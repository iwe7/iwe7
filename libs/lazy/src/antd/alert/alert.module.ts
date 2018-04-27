import { NgModule } from '@angular/core';
import { AlertComponent } from './alert';
import { NzAlertModule } from 'iwe7/antd/alert';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'iwe7/shared';
@NgModule({
  imports: [CommonModule, SharedModule, NzAlertModule],
  declarations: [AlertComponent],
  entryComponents: [AlertComponent]
})
export class AlertModule {
  get(key: string) {
    return AlertComponent;
  }
}
