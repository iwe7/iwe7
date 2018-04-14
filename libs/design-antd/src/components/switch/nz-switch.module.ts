import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzSwitchComponent } from './nz-switch.component';

@NgModule({
  exports: [NzSwitchComponent],
  declarations: [NzSwitchComponent],
  imports: [CommonModule],
  entryComponents: [NzSwitchComponent]
})
export class NzSwitchModule {
  getComponentByName(key: string) {
    return NzSwitchComponent;
  }
}
