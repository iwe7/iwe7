import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseHelpHeader } from './help-header';
import { NzDropDownModule } from 'iwe7/antd/dropdown';
import { NzMenuModule } from 'iwe7/antd/menu';

@NgModule({
  imports: [CommonModule, NzDropDownModule, NzMenuModule],
  declarations: [BaseHelpHeader],
  entryComponents: [BaseHelpHeader]
})
export class BaseHelpHeaderModule {
  get(key: string) {
    return BaseHelpHeader;
  }
}
