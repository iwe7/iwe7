import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'select-test',
        loadChildren: './select-test/select-test.module#SelectTestModule'
      }
    ])
  ],
  exports: []
})
export class SelectRoutesModule {}
