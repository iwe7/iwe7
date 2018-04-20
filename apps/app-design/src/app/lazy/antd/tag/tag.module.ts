import { NgModule } from '@angular/core';
import { NzTagModule } from 'iwe7/antd/tag';
import { TagComponent } from './tag';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'iwe7/shared';
@NgModule({
  imports: [CommonModule, NzTagModule, FormsModule, SharedModule],
  declarations: [TagComponent],
  entryComponents: [TagComponent]
})
export class TagModule {
  get(key: string) {
    return TagComponent;
  }
}
