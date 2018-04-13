import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ROUTES, RouterModule } from '@angular/router';
import { NzAffixComponent } from './nz-affix.component';
import { LazyComponentModuleBase } from 'iwe7/lazy-load';
import { Iwe7SharedModule } from 'iwe7/shared';
@NgModule({
  declarations: [NzAffixComponent],
  exports: [NzAffixComponent],
  imports: [CommonModule, Iwe7SharedModule],
  entryComponents: [NzAffixComponent]
})
export class NzAffixModule extends LazyComponentModuleBase {
  getComponentByName(key: string) {
    return NzAffixComponent;
  }
}
