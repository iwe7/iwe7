import { NgModule } from '@angular/core';
import { NzRateModule } from 'iwe7/antd/rate';
import { RateComponent } from './rate';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'iwe7/shared';
@NgModule({
  imports: [CommonModule, NzRateModule, FormsModule, SharedModule],
  declarations: [RateComponent],
  entryComponents: [RateComponent]
})
export class RateModule {
  get(key: string) {
    return RateComponent;
  }
}
