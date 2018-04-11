import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Iwe7DesignDirective } from './iwe7-design.directive';
import { DesignPageComponent } from './design-page/design-page.component';
import { DesignFormComponent } from './design-form/design-form.component';
import { Iwe7CoreModule } from 'iwe7/core';
import { Iwe7TouchModule } from 'iwe7/touch';
import { Iwe7PipesModule } from 'iwe7/pipes';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    // 核心功能
    Iwe7CoreModule,
    Iwe7TouchModule,
    Iwe7PipesModule,
    RouterModule.forChild([
      {
        path: 'design-setting-default',
        loadChildren:
          './design-setting-default/design-setting-default.module#DesignSettingDefaultModule'
      },
      {
        path: 'design-group',
        loadChildren:
          './design-group/design-group.module#DesignGroupModule'
      }
    ])
  ],
  declarations: [
    Iwe7DesignDirective,
    DesignPageComponent,
    DesignFormComponent
  ],
  exports: [
    Iwe7DesignDirective,
    DesignPageComponent,
    DesignFormComponent
  ]
})
export class Iwe7DesignModule {}
