import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'design-page-empty',
        loadChildren:
          './design-page-empty/design-page-empty.module#DesignPageEmptyModule'
      },
      // 添加页面
      {
        path: 'design-page-add',
        loadChildren:
          './design-page-add/design-page-add.module#DesignPageAddModule'
      }
    ])
  ]
})
export class DesignPagesModule {}
