import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablePreview } from './table-preview';
import { NzTableModule } from 'iwe7/antd/table';
import { NzButtonModule } from 'iwe7/antd/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NzInputModule } from 'iwe7/antd/input';
import { NzFormModule } from 'iwe7/antd/form';
import { NzDropDownModule } from 'iwe7/antd/dropdown';
import { NzPopconfirmModule } from 'iwe7/antd/popconfirm';
import { NzMenuModule } from 'iwe7/antd/menu';
import { NzCardModule } from 'iwe7/antd/card';
import { TableSearchModule } from '../table-search/table-search.module';


@NgModule({
  imports: [
    CommonModule,
    NzTableModule,
    NzButtonModule,
    ReactiveFormsModule,
    NzInputModule,
    NzFormModule,
    NzDropDownModule,
    NzPopconfirmModule,
    NzMenuModule,
    NzCardModule,
    FormsModule,
    TableSearchModule
  ],
  declarations: [TablePreview],
  entryComponents: [TablePreview],
  exports: [TablePreview]
})
export class TablePreviewModule {
  get(key: string) {
    return TablePreview;
  }
}
