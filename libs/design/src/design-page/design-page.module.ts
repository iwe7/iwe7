import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignPageComponent } from './design-page.component';
import { LazyComponentModuleBase } from 'iwe7/lazy-load';
import { RouterModule } from '@angular/router';

import { Iwe7SharedModule } from 'iwe7/shared';

@NgModule({
  imports: [
    CommonModule,
    Iwe7SharedModule,
    RouterModule.forChild([
      {
        path: 'design-page',
        component: DesignPageComponent
      }
    ])
  ],
  declarations: [DesignPageComponent]
})
export class DesignPageModule extends LazyComponentModuleBase {
  getComponentByName(key: string) {
    return DesignPageComponent;
  }
}
