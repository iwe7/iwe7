import { NgModule } from '@angular/core';
import { StepsComponent } from './steps';
import { NzStepsModule } from 'iwe7/antd/steps';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'iwe7/shared';
@NgModule({
  imports: [CommonModule, SharedModule, NzStepsModule],
  declarations: [StepsComponent],
  entryComponents: [StepsComponent]
})
export class StepsModule {
  get(key: string) {
    return StepsComponent;
  }
}
