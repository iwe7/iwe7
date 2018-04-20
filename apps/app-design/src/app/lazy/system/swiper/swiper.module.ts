import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwiperComponent } from './swiper';
import { SharedModule } from 'iwe7/shared';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [SwiperComponent],
  entryComponents: [SwiperComponent]
})
export class SysSwiperModule {
  get(key: string) {
    return SwiperComponent;
  }
}
