import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon/icon.component';
import { NgZorroAntdLazyModule } from './components/ng-zorro-antd.lazy';
@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdLazyModule
  ]
})
export class DesignAntdModule {}
