import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModal } from './modal';
import { NzModalModule } from 'iwe7/antd/modal';
@NgModule({
  imports: [CommonModule, NzModalModule],
  declarations: [BaseModal],
  entryComponents: [BaseModal]
})
export class BaseModalModule {
  get(key: string) {
    return BaseModal;
  }
}
