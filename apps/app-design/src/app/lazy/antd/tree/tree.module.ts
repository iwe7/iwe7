import { NgModule } from '@angular/core';
import { TreeComponent } from './tree';
import { NzTreeModule } from 'iwe7/antd/tree';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'iwe7/shared';
@NgModule({
  imports: [CommonModule, SharedModule, NzTreeModule],
  declarations: [TreeComponent],
  entryComponents: [TreeComponent]
})
export class TreeModule {
  get(key: string) {
    return TreeComponent;
  }
}
