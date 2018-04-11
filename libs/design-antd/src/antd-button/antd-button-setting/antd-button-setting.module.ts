import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AntdButtonSettingRoutingModule } from './antd-button-setting-routing.module';
import { AntdButtonSettingComponent } from './antd-button-setting.component';
import { LazyComponentModuleBase } from 'iwe7/lazy-load';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, AntdButtonSettingRoutingModule, ReactiveFormsModule],
  declarations: [AntdButtonSettingComponent]
})
export class AntdButtonSettingModule extends LazyComponentModuleBase {
  getComponentByName(key: string) {
    return AntdButtonSettingComponent;
  }
}
