import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SCROLL_SERVICE_PROVIDER } from '../core/scroll/nz-scroll.service';
import { ROUTES, RouterModule } from '@angular/router';
import { NzAffixComponent } from './nz-affix.component';

@NgModule({
  declarations: [NzAffixComponent],
  exports: [NzAffixComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: NzAffixComponent
      }
    ])
  ],
  providers: [
    SCROLL_SERVICE_PROVIDER
  ]
})
export class NzAffixModule {}
