import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseList } from './list';
import { NzButtonModule } from 'iwe7/antd/button';
import { NzInputModule } from 'iwe7/antd/input';

@NgModule({
  imports: [CommonModule, NzButtonModule, NzInputModule],
  declarations: [BaseList],
  entryComponents: [BaseList]
})
export class BaseListModule {
  get(key: string) {
    return BaseList;
  }
}
