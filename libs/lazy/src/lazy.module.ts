import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OverlayModule } from '@angular/cdk/overlay';

import { DevicesRoutesModule } from './devices/routes';
import { SystemRoutesModule } from './system/routes';
import { SelectRoutesModule } from './select/routes';
import { ThreeRoutesModule } from './three/routes';

import { AntdRoutesModule } from './antd/routes';

import { NzSelectModule } from 'iwe7/antd/select';
import { NzButtonModule } from 'iwe7/antd/button';

@NgModule({
  imports: [
    CommonModule,
    DevicesRoutesModule,
    AntdRoutesModule,
    NzSelectModule,
    NzButtonModule,
    SystemRoutesModule,
    SelectRoutesModule,
    ThreeRoutesModule
  ],
  declarations: []
})
export class LazyModule {}
