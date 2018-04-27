import { NgModule } from '@angular/core';
import { NzUploadModule } from 'iwe7/antd/upload';
import { UploadComponent } from './upload';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'iwe7/shared';
@NgModule({
  imports: [CommonModule, NzUploadModule, FormsModule, SharedModule],
  declarations: [UploadComponent],
  entryComponents: [UploadComponent]
})
export class UploadModule {
  get(key: string) {
    return UploadComponent;
  }
}
