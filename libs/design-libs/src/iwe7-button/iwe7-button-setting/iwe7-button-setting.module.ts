import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Iwe7ButtonSettingDesign } from './iwe7-button-setting';
import { LazyComponentModuleBase } from 'iwe7/lazy-load';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: Iwe7ButtonSettingDesign
      }
    ])
  ],
  declarations: [Iwe7ButtonSettingDesign]
})
export class Iwe7ButtonSettingModule extends LazyComponentModuleBase {
  getComponentByName(key: string) {
    return Iwe7ButtonSettingDesign;
  }
}
