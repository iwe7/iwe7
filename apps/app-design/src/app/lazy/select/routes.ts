import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'select-test',
        loadChildren: './select-test/select-test.module#SelectTestModule'
      },
      {
        path: 'select-forms',
        loadChildren: './select-forms/select-forms.module#SelectFormsModule'
      }
    ])
  ],
  exports: []
})
export class SelectRoutesModule {}
