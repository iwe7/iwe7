import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzRateComponent } from './nz-rate.component';
import { SharedModule } from 'iwe7/shared';
@NgModule({
  exports: [NzRateComponent],
  declarations: [NzRateComponent],
  imports: [CommonModule, SharedModule]
})
export class NzRateModule {}
