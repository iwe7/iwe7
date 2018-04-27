import { NgModule } from '@angular/core';
import { NzSliderModule } from 'iwe7/antd/slider';
import { SliderComponent } from './slider';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'iwe7/shared';
@NgModule({
  imports: [CommonModule, NzSliderModule, FormsModule, SharedModule],
  declarations: [SliderComponent],
  entryComponents: [SliderComponent]
})
export class SliderModule {
  get(key: string) {
    return SliderComponent;
  }
}
