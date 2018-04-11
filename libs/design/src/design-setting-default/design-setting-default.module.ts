import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignSettingDefaultComponent } from './design-setting-default.component';
import { LazyComponentModuleBase } from 'iwe7/lazy-load';
import { RouterModule } from '@angular/router';
import { Iwe7SharedModule } from 'iwe7/shared';
import { DesignGroupExtaComponent } from './design-group-exta/design-group-exta.component';

@NgModule({
  imports: [
    CommonModule,
    Iwe7SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: DesignSettingDefaultComponent
      }
    ])
  ],
  declarations: [DesignSettingDefaultComponent, DesignGroupExtaComponent]
})
export class DesignSettingDefaultModule extends LazyComponentModuleBase {
  getComponentByName(key: string) {
    return DesignSettingDefaultComponent;
  }
}
