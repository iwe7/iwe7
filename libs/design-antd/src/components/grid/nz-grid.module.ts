import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzColComponent } from './nz-col.component';
import { NzColDirective } from './nz-col.directive';
import { NzRowComponent } from './nz-row.component';
import { NzRowDirective } from './nz-row.directive';
import { LazyComponentModuleBase } from 'iwe7/lazy-load';
import { Iwe7CoreModule } from 'iwe7/core';

@NgModule({
  declarations: [
    NzRowComponent,
    NzColDirective,
    NzColComponent,
    NzRowDirective
  ],
  exports: [NzRowComponent, NzColDirective, NzColComponent, NzRowDirective],
  imports: [CommonModule, Iwe7CoreModule],
  entryComponents: [NzColComponent, NzRowComponent]
})
export class NzGridModule extends LazyComponentModuleBase {
  getComponentByName(key: string) {
    if (key === 'nz-row') {
      return NzRowComponent;
    } else {
      return NzColComponent;
    }
  }
}
