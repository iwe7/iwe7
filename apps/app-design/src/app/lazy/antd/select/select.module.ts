import { NgModule } from '@angular/core';
import { NzSelectModule } from 'iwe7/antd/select';
import { SelectComponent } from './select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'iwe7/shared';
@NgModule({
  imports: [CommonModule, NzSelectModule, FormsModule, SharedModule],
  exports: [NzSelectModule],
  declarations: [SelectComponent, ],
  entryComponents: [SelectComponent]
})
export class SelectModule {
  get(key: string) {
    return SelectComponent;
  }
}
