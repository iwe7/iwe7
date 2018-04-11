import { ObserversModule } from '@angular/cdk/observers';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzButtonGroupComponent } from './nz-button-group.component';
import { NzButtonComponent } from './nz-button.component';
import { RouterModule } from '@angular/router';
import { LazyComponentModuleBase } from 'iwe7/lazy-load';

@NgModule({
  declarations: [NzButtonComponent, NzButtonGroupComponent],
  exports: [NzButtonComponent, NzButtonGroupComponent],
  imports: [
    CommonModule,
    ObserversModule,
    RouterModule.forChild([
      {
        path: 'nz-button',
        component: NzButtonComponent
      },
      {
        path: 'nz-button-group',
        component: NzButtonGroupComponent
      }
    ])
  ]
})
export class NzButtonModule extends LazyComponentModuleBase {
  getComponentByName(key: string) {
    if (key === 'nz-button') {
      return NzButtonComponent;
    } else {
      return NzButtonGroupComponent;
    }
  }
}
