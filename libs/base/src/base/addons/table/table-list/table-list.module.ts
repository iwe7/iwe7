import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableList } from './table-list';
import { NzTableModule } from 'iwe7/antd/table';
import { NzButtonModule } from 'iwe7/antd/button';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'iwe7/antd/input';
import { NzFormModule } from 'iwe7/antd/form';
import { NzDropDownModule } from 'iwe7/antd/dropdown';
import { NzPopconfirmModule } from 'iwe7/antd/popconfirm';
import { NzMenuModule } from 'iwe7/antd/menu';
import { NzCardModule } from 'iwe7/antd/card';


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
    NzCardModule
  ],
  declarations: [TableList],
  entryComponents: [TableList]
})
export class TableListModule {
  get(key: string) {
    return TableList;
  }
}
