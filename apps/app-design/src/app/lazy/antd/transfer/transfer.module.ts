import { NgModule } from '@angular/core';
import { TransferComponent } from './transfer';
import { NzTreeModule } from 'iwe7/antd/tree';
import { NzTransferModule } from 'iwe7/antd/transfer';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'iwe7/shared';
@NgModule({
  imports: [CommonModule, SharedModule, NzTreeModule, NzTransferModule],
  declarations: [TransferComponent],
  entryComponents: [TransferComponent]
})
export class TransferModule {
  get(key: string) {
    return TransferComponent;
  }
}
