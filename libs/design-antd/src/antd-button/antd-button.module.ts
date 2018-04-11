import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AntdButtonRoutingModule } from './antd-button-routing.module';
import { LAZY_COMPONENTS } from 'iwe7/lazy-load';

@NgModule({
  imports: [CommonModule, AntdButtonRoutingModule],
  declarations: [],
  providers: []
})
export class AntdButtonModule {}
