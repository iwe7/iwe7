import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgZorroAntdLazyModule } from './components/ng-zorro-antd.lazy';
@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdLazyModule,
    RouterModule.forChild([
      {
        path: 'design-antd',
        loadChildren: './design-antd/design-antd#DesignAntdModule',
        data: {}
      },
      {
        path: 'ng-zero-antd',
        loadChildren: './components/ng-zorro-antd.lazy#NgZorroAntdLazyModule'
      }
    ])
  ]
})
export class DesignAntdModule {}
