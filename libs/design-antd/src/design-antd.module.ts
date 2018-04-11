import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AntdButtonModule } from './antd-button/antd-button.module';
import { NgZorroAntdLazyModule } from './components/ng-zorro-antd.lazy';

@NgModule({
  imports: [
    CommonModule,
    // 按钮组件
    AntdButtonModule,
    NgZorroAntdLazyModule
  ]
})
export class DesignAntdModule {}
