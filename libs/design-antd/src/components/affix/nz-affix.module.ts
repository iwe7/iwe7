import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SCROLL_SERVICE_PROVIDER } from '../core/scroll/nz-scroll.service';
import { ROUTES, RouterModule } from '@angular/router';
import { NzAffixComponent } from './nz-affix.component';
import { LazyComponentModuleBase } from 'iwe7/lazy-load';
import { Iwe7SharedModule } from 'iwe7/shared';
@NgModule({
  declarations: [NzAffixComponent],
  exports: [NzAffixComponent],
  imports: [
    CommonModule,
    Iwe7SharedModule,
    RouterModule.forChild([
      {
        path: 'nz-affix',
        component: NzAffixComponent
      }
    ])
  ],
  providers: [SCROLL_SERVICE_PROVIDER]
})
export class NzAffixModule extends LazyComponentModuleBase {
  getComponentByName(key: string) {
    return NzAffixComponent;
  }
}
