import { NgModule } from '@angular/core';
import { ProgressComponent } from './progress';
import { NzProgressModule } from 'iwe7/antd/progress';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'iwe7/shared';
@NgModule({
  imports: [CommonModule, SharedModule, NzProgressModule],
  declarations: [ProgressComponent],
  entryComponents: [ProgressComponent]
})
export class ProgressModule {
  get(key: string) {
    return ProgressComponent;
  }
}
