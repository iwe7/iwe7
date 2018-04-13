import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignGroupComponent } from './design-group.component';
import { LazyComponentModuleBase } from 'iwe7/lazy-load';
import { RouterModule } from '@angular/router';

import { Iwe7SharedModule } from 'iwe7/shared';

@NgModule({
  imports: [CommonModule, Iwe7SharedModule],
  declarations: [DesignGroupComponent],
  entryComponents: [DesignGroupComponent]
})
export class DesignGroupModule extends LazyComponentModuleBase {
  getComponentByName(key: string) {
    return DesignGroupComponent;
  }
}
