import { NgModule } from '@angular/core';
import { AnchorComponent } from './anchor';
import { NzAnchorModule } from 'iwe7/antd/anchor';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'iwe7/shared';
@NgModule({
  imports: [CommonModule, SharedModule, NzAnchorModule],
  declarations: [AnchorComponent],
  entryComponents: [AnchorComponent]
})
export class AnchorModule {
  get(key: string) {
    return AnchorComponent;
  }
}
