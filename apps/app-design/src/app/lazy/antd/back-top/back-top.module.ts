import { NgModule } from '@angular/core';
import { BackTopComponent } from './back-top';
import { NzBackTopModule } from 'iwe7/antd/back-top';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'iwe7/shared';
@NgModule({
  imports: [CommonModule, SharedModule, NzBackTopModule],
  declarations: [BackTopComponent],
  entryComponents: [BackTopComponent]
})
export class BackTopModule {
  get(key: string) {
    return BackTopComponent;
  }
}
