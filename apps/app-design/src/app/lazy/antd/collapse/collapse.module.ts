import { NgModule } from '@angular/core';
import { CollapseComponent } from './collapse';
import { NzCollapseModule } from 'iwe7/antd/collapse';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'iwe7/shared';
@NgModule({
  imports: [CommonModule, SharedModule, NzCollapseModule],
  declarations: [CollapseComponent],
  entryComponents: [CollapseComponent]
})
export class CollapseModule {
  get(key: string) {
    return CollapseComponent;
  }
}
