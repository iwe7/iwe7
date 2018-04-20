import { NgModule } from '@angular/core';
import { NzSwitchModule } from 'iwe7/antd/switch';
import { SwitchComponent } from './switch';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'iwe7/shared';
@NgModule({
  imports: [CommonModule, NzSwitchModule, FormsModule, SharedModule],
  declarations: [SwitchComponent],
  entryComponents: [SwitchComponent]
})
export class SwitchModule {
  get(key: string) {
    return SwitchComponent;
  }
}
