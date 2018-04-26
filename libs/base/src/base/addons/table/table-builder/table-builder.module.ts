import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableBuilder } from './table-builder';
import { NzTableModule } from 'iwe7/antd/table';
import { NzInputModule } from 'iwe7/antd/input';
import { NzInputNumberModule } from 'iwe7/antd/input-number';

import { NzButtonModule } from 'iwe7/antd/button';
import { NzFormModule } from 'iwe7/antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'iwe7/antd/select';
import { NzSwitchModule } from 'iwe7/antd/switch';
import { NzCardModule } from 'iwe7/antd/card';
import { NzTabsModule } from 'iwe7/antd/tabs';

import {SharedModule}  from 'iwe7/shared';
@NgModule({
  imports: [
    CommonModule,
    NzTableModule,
    NzInputModule,
    NzButtonModule,
    NzFormModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzInputNumberModule,
    NzSwitchModule,
    NzCardModule,
    NzTabsModule,
    SharedModule
  ],
  declarations: [TableBuilder],
  entryComponents: [TableBuilder]
})
export class TableBuilderModule {
  get(key: string) {
    return TableBuilder;
  }
}
