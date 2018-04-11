import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AntdButtonRoutingModule } from './antd-button-routing.module';
import { LazyComponentModuleBase } from 'iwe7/lazy-load';
import { AntdButtonComponent } from './antd-button.component';

import { NzButtonModule } from 'ng-zorro-antd';
@NgModule({
  imports: [CommonModule, AntdButtonRoutingModule, NzButtonModule],
  declarations: [AntdButtonComponent]
})
export class AntdButtonModule extends LazyComponentModuleBase {
  getComponentByName(key: string) {
    return AntdButtonComponent;
  }
}
