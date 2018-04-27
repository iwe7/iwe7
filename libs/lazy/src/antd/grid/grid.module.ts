import { NgModule } from '@angular/core';
import { GridComponent } from './grid';
import { NzGridModule } from 'iwe7/antd/grid';
import { NzSliderModule } from 'iwe7/antd/slider';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'iwe7/shared';
@NgModule({
  imports: [CommonModule, SharedModule, NzGridModule, NzSliderModule],
  declarations: [GridComponent],
  entryComponents: [GridComponent]
})
export class GridModule {
  get(key: string) {
    return GridComponent;
  }
}
