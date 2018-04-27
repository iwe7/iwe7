import { NgModule } from '@angular/core';
import { DividerComponent } from './divider';
import { NzDividerModule } from 'iwe7/antd/divider';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'iwe7/shared';
@NgModule({
  imports: [CommonModule, SharedModule, NzDividerModule],
  declarations: [DividerComponent],
  entryComponents: [DividerComponent]
})
export class DividerModule {
  get(key: string) {
    return DividerComponent;
  }
}
