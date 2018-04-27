import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout';
import { NzLayoutModule } from 'iwe7/antd/layout';
import { NzMenuModule } from 'iwe7/antd/menu';
import { NzPopoverModule } from 'iwe7/antd/popover';
import { NzButtonModule } from 'iwe7/antd/button';
import { NzCardModule } from 'iwe7/antd/card';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'iwe7/shared';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NzLayoutModule,
    NzMenuModule,
    NzPopoverModule,
    NzButtonModule,
    NzCardModule
  ],
  declarations: [LayoutComponent],
  entryComponents: [LayoutComponent]
})
export class LayoutModule {
  get(key: string) {
    return LayoutComponent;
  }
}
