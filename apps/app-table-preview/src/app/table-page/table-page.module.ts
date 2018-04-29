import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablePageComponent } from './table-page.component';
import { NzTabsModule } from 'iwe7/antd/tabs';
@NgModule({
  imports: [CommonModule, NzTabsModule],
  declarations: [TablePageComponent],
  entryComponents: [TablePageComponent],
  exports: [TablePageComponent]
})
export class TablePageModule {
  get(key: string) {
    return TablePageComponent;
  }
}
