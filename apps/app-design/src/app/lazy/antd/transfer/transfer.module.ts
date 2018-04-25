import { NgModule } from '@angular/core';
import { TransferComponent } from './transfer';
import { NzTreeModule } from 'iwe7/antd/tree';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'iwe7/shared';
@NgModule({
  imports: [CommonModule, SharedModule, NzTreeModule],
  declarations: [TransferComponent],
  entryComponents: [TransferComponent]
})
export class TransferModule {
  get(key: string) {
    return TransferComponent;
  }
}
