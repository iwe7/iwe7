import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzSwitchComponent } from './nz-switch.component';
import { SharedModule } from 'iwe7/shared';

@NgModule({
  exports: [NzSwitchComponent],
  declarations: [NzSwitchComponent],
  imports: [CommonModule, SharedModule]
})
export class NzSwitchModule {}
