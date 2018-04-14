import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzRateComponent } from './nz-rate.component';

@NgModule({
  exports: [NzRateComponent],
  declarations: [NzRateComponent],
  imports: [CommonModule],
  entryComponents: [NzRateComponent]
})
export class NzRateModule {
  getComponentByName(key: string) {
    return NzRateComponent;
  }
}
