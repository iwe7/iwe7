import { NgModule } from '@angular/core';

import { TableSearch } from './table-search';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'iwe7/antd/form';
import { NzGridModule } from 'iwe7/antd/grid';
import { NzInputModule } from 'iwe7/antd/input';
import { NzButtonModule } from 'iwe7/antd/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzGridModule,
    NzInputModule,
    NzButtonModule
  ],
  declarations: [TableSearch],
  exports: [TableSearch],
  entryComponents: [TableSearch],
  providers: []
})
export class TableSearchModule {
  get(key: string) {
    return TableSearch;
  }
}
