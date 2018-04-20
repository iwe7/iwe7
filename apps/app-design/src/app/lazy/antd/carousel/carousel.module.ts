import { NgModule } from '@angular/core';
import { CarouselComponent } from './carousel';
import { NzCarouselModule } from 'iwe7/antd/carousel';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'iwe7/shared';
@NgModule({
  imports: [CommonModule, SharedModule, NzCarouselModule],
  declarations: [CarouselComponent],
  entryComponents: [CarouselComponent]
})
export class CarouselModule {
  get(key: string) {
    return CarouselComponent;
  }
}
