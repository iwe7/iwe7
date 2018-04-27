import { NgModule } from '@angular/core';
import { NzTableModule } from 'iwe7/antd/table';
import { NzCheckboxModule } from 'iwe7/antd/checkbox';
import { NzTagModule } from 'iwe7/antd/tag';
import { NzAvatarModule } from 'iwe7/antd/avatar';
import { NzSwitchModule } from 'iwe7/antd/switch';
import { NzRateModule } from 'iwe7/antd/rate';
import { NzBadgeModule } from 'iwe7/antd/badge';
import { NzButtonModule } from 'iwe7/antd/button';

import { Iwe7TableComponent } from './table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    NzTableModule,
    NzBadgeModule,
    NzRateModule,
    FormsModule,
    NzCheckboxModule,
    NzTagModule,
    NzAvatarModule,
    NzSwitchModule,
    NzButtonModule
  ],
  declarations: [Iwe7TableComponent],
  entryComponents: [Iwe7TableComponent]
})
export class TableModule {
  get(key: string) {
    return Iwe7TableComponent;
  }
}
