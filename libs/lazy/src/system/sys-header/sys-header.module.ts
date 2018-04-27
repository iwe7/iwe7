import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'iwe7/antd/button';
import { SysHeaderComponent } from './sys-header';
import { SharedModule } from 'iwe7/shared';

@NgModule({
  imports: [CommonModule, SharedModule, NzButtonModule],
  declarations: [SysHeaderComponent],
  entryComponents: [SysHeaderComponent]
})
export class SysHeaderModule {
  get(key: string) {
    return SysHeaderComponent;
  }
}
