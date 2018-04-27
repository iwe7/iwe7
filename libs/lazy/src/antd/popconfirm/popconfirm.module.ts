import { NgModule } from '@angular/core';
import { PopconfirmComponent } from './popconfirm';
import { NzPopconfirmModule } from 'iwe7/antd/popconfirm';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'iwe7/shared';
@NgModule({
  imports: [CommonModule, SharedModule, NzPopconfirmModule],
  declarations: [PopconfirmComponent],
  entryComponents: [PopconfirmComponent]
})
export class PopconfirmModule {
  get(key: string) {
    return PopconfirmComponent;
  }
}
