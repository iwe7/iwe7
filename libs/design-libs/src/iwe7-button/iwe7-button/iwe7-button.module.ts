import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Iwe7ButtonDesign } from './iwe7-button';
import { LazyComponentModuleBase } from 'iwe7/lazy-load';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: Iwe7ButtonDesign
      }
    ])
  ],
  declarations: [Iwe7ButtonDesign]
})
export class Iwe7ButtonModule extends LazyComponentModuleBase {
  getComponentByName(key: string) {
    return Iwe7ButtonDesign;
  }
}
