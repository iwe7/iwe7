import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzRadioButtonComponent } from './nz-radio-button.component';
import { NzRadioGroupComponent } from './nz-radio-group.component';
import { NzRadioComponent } from './nz-radio.component';
import { LazyComponentModuleBase } from 'iwe7/lazy-load';
import { RouterModule } from '@angular/router';
let routes = [
  {
    path: 'nz-radio',
    component: NzRadioComponent
  },
  {
    path: 'nz-radio-button',
    component: NzRadioButtonComponent
  },
  {
    path: 'nz-radio-group',
    component: NzRadioGroupComponent
  }
];
@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  exports: [NzRadioComponent, NzRadioButtonComponent, NzRadioGroupComponent],
  declarations: [
    NzRadioComponent,
    NzRadioButtonComponent,
    NzRadioGroupComponent
  ]
})
export class NzRadioModule extends LazyComponentModuleBase {
  getComponentByName(key: string) {
    let component;
    routes.map(res => {
      if (res.path === key) {
        component = res.component;
      }
    });
    return component;
  }
}
