import { NgModule } from '@angular/core';
import { ModalComponent } from './modal';
import { NzModalModule } from 'iwe7/antd/modal';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'iwe7/shared';
@NgModule({
  imports: [CommonModule, SharedModule, NzModalModule],
  declarations: [ModalComponent],
  entryComponents: [ModalComponent]
})
export class ModalModule {
  get(key: string) {
    return ModalComponent;
  }
}
