import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzBackTopComponent } from './nz-back-top.component';

@NgModule({
  declarations: [NzBackTopComponent],
  exports: [NzBackTopComponent],
  imports: [CommonModule]
})
export class NzBackTopModule {
  getComponentByName(key: string) {
    return NzBackTopComponent;
  }
}
