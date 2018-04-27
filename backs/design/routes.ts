import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'design-setting',
        loadChildren: './design.module#DesignModule'
      },
      {
        path: 'design-elements',
        loadChildren: './design.module#DesignModule'
      },
      {
        path: 'design-json',
        loadChildren: './design.module#DesignModule'
      },
      {
        path: 'design-create',
        loadChildren: './design.module#DesignModule'
      }
    ])
  ]
})
export class DesignRoutesModule {}
