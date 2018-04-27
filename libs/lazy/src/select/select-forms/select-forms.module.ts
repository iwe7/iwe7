import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'iwe7/shared';
import { SelectForms } from './select-forms';
import { NzButtonModule } from 'iwe7/antd/button';
import { NzPopoverModule } from 'iwe7/antd/popover';

@NgModule({
  imports: [CommonModule, SharedModule, NzButtonModule, NzPopoverModule],
  declarations: [SelectForms],
  entryComponents: [SelectForms]
})
export class SelectFormsModule {
  get(key: string) {
    return SelectForms;
  }
}
