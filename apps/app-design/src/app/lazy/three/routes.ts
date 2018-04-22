import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'three-test',
        loadChildren: './three-test/three-test.module#ThreeTestModule'
      }
    ])
  ]
})
export class ThreeRoutesModule {}
