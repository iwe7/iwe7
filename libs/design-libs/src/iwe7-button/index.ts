import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LAZY_COMPONENTS } from 'iwe7/lazy-load';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'design.libs.iwe7.button',
        loadChildren: './iwe7-button/iwe7-button.module#Iwe7ButtonModule'
      },
      {
        path: 'design.libs.iwe7.button.setting',
        loadChildren:
          './iwe7-button-setting/iwe7-button-setting.module#Iwe7ButtonSettingModule'
      }
    ])
  ],
  providers: [
    {
      provide: LAZY_COMPONENTS,
      useFactory: () => [
        {
          selector: 'iwe7-button',
          loadChildren: './iwe7-button/iwe7-button.module#Iwe7ButtonModule'
        },
        {
          selector: 'iwe7-button-setting',
          loadChildren:
            './iwe7-button-setting/iwe7-button-setting.module#Iwe7ButtonSettingModule'
        }
      ],
      multi: true
    }
  ]
})
export class Iwe7ButtonDesignModule {}
