import { NgModule } from '@angular/core';
import { TooltipComponent } from './tooltip';
import { NzToolTipModule } from 'iwe7/antd/tooltip';
import { NzButtonModule } from 'iwe7/antd/button';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'iwe7/shared';
@NgModule({
  imports: [CommonModule, SharedModule, NzToolTipModule],
  declarations: [TooltipComponent],
  entryComponents: [TooltipComponent]
})
export class TooltipModule {
  get(key: string) {
    return TooltipComponent;
  }
}
