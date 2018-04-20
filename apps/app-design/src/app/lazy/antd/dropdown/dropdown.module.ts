import { NgModule } from '@angular/core';
import { DropdownComponent } from './dropdown';
import { NzDropDownModule } from 'iwe7/antd/dropdown';
import { NzMenuModule } from 'iwe7/antd/menu';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'iwe7/shared';
@NgModule({
  imports: [CommonModule, SharedModule, NzDropDownModule, NzMenuModule],
  declarations: [DropdownComponent],
  entryComponents: [DropdownComponent]
})
export class DropdownModule {
  get(key: string) {
    return DropdownComponent;
  }
}
