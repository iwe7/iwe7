import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Iwe7CoreModule } from 'iwe7/core';
import { Iwe7TouchModule } from 'iwe7/touch';
import { Iwe7PipesModule } from 'iwe7/pipes';
import { ROUTES } from '@angular/router';
import { DesignGroupDirective } from './design-group.directive';

@NgModule({
  imports: [
    CommonModule,
    // 核心功能
    Iwe7CoreModule,
    Iwe7TouchModule,
    Iwe7PipesModule
  ],
  declarations: [DesignGroupDirective],
  exports: [DesignGroupDirective],
  providers: [
    {
      provide: ROUTES,
      useValue: [
        {
          path: 'design-setting-default',
          loadChildren:
            './design-setting-default/design-setting-default.module#DesignSettingDefaultModule'
        },
        {
          path: 'design-group',
          loadChildren: './design-group/design-group.module#DesignGroupModule'
        },
        {
          path: 'design-page',
          loadChildren: './design-page/design-page.module#DesignPageModule'
        },
        {
          path: 'design-form',
          loadChildren: './design-form/design-form.module#DesignFormModule'
        }
      ],
      multi: true
    }
  ]
})
export class Iwe7DesignModule {}
