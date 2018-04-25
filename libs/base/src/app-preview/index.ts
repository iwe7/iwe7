import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'new-case',
        loadChildren: './new-case/new-case.module#NewCaseModule'
      },
      {
        path: 'new-case-item',
        loadChildren: './new-case/new-case.module#NewCaseModule'
      }
    ])
  ]
})
export class AppPreviewModule {}
