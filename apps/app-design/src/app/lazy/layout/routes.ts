import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'meepo-layout',
        loadChildren: './layout.module#LayoutModule'
      }
    ])
  ],
  exports: []
})
export class LayoutRoutesModule {}
