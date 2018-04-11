import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignFormComponent } from './design-form.component';
import { LazyComponentModuleBase } from 'iwe7/lazy-load';
import { RouterModule } from '@angular/router';

import { Iwe7SharedModule } from 'iwe7/shared';

@NgModule({
  imports: [
    CommonModule,
    Iwe7SharedModule,
    RouterModule.forChild([
      {
        path: 'design-form',
        component: DesignFormComponent
      }
    ])
  ],
  declarations: [DesignFormComponent]
})
export class DesignFormModule extends LazyComponentModuleBase {
  getComponentByName(key: string) {
    return DesignFormComponent;
  }
}
