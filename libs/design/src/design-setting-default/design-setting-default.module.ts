import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DesignSettingDefaultComponent } from './design-setting-default.component';
import { LazyComponentModuleBase } from 'iwe7/lazy-load';
import { RouterModule } from '@angular/router';
import { Iwe7PipesModule } from 'iwe7/pipes';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    Iwe7PipesModule,
    RouterModule.forChild([
      {
        path: '',
        component: DesignSettingDefaultComponent
      }
    ])
  ],
  declarations: [DesignSettingDefaultComponent]
})
export class DesignSettingDefaultModule extends LazyComponentModuleBase {
  getComponentByName(key: string) {
    return DesignSettingDefaultComponent;
  }
}
