import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'iwe7/shared';
import { SelectTest } from './select-test';
import { NzPopoverModule } from 'iwe7/antd/popover';
import { NzButtonModule } from 'iwe7/antd/button';
import { NzMenuModule } from 'iwe7/antd/menu';
import { NzLayoutModule } from 'iwe7/antd/layout';
import { NzCardModule } from 'iwe7/antd/card';
import { NzGridModule } from 'iwe7/antd/grid';
import { NzInputModule } from 'iwe7/antd/input';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NzPopoverModule,
    NzButtonModule,
    NzMenuModule,
    NzLayoutModule,
    NzCardModule,
    NzGridModule,
    NzInputModule
  ],
  declarations: [SelectTest],
  entryComponents: [SelectTest]
})
export class SelectTestModule {
  get(key: string) {
    return SelectTest;
  }
}
