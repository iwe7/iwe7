import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TableFormBuilder } from './form-builder';
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
import { NzPopconfirmModule } from 'iwe7/antd/popconfirm';
import { SharedModule } from 'iwe7/shared';
import { NzMessageModule } from 'iwe7/antd/message';
import { NzUploadModule } from 'iwe7/antd/upload';
import { NzRadioModule } from 'iwe7/antd/radio';
import { NzCheckboxModule } from 'iwe7/antd/checkbox';
import { NzCalendarModule } from 'iwe7/antd/calendar';

import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

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
    SharedModule,
    NzPopconfirmModule,
    NzMessageModule,
    NzUploadModule,
    NzRadioModule,
    NzCheckboxModule,
    NzCalendarModule,
  ],
  declarations: [TableFormBuilder],
  entryComponents: [TableFormBuilder],
  exports: [TableFormBuilder],
  providers: [
    DatePipe,
    {
      provide: LOCALE_ID,
      useValue: 'zh-cn'
    }
  ]
})
export class TableFormBuilderModule {
  get(key: string) {
    return TableFormBuilder;
  }
}
