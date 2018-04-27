import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'iwe7/shared';
import { SelectIcon } from './select-icon';
import { NzPopoverModule } from 'iwe7/antd/popover';
import { NzButtonModule } from 'iwe7/antd/button';

@NgModule({
  imports: [CommonModule, SharedModule, NzPopoverModule, NzButtonModule],
  declarations: [SelectIcon],
  entryComponents: [SelectIcon]
})
export class SelectIconModule {
  get(key: string) {
    return SelectIcon;
  }
}
