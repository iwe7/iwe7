import { NgModule } from '@angular/core';
import { CascaderComponent } from './cascader';
import { NzCascaderModule } from 'iwe7/antd/cascader';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'iwe7/shared';
@NgModule({
  imports: [CommonModule, SharedModule, NzCascaderModule],
  declarations: [CascaderComponent],
  entryComponents: [CascaderComponent]
})
export class CascaderModule {
  get(key: string) {
    return CascaderComponent;
  }
}
