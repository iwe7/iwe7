import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd';
import { DesignAntdModule } from 'iwe7/design-antd';
import { Iwe7LazyLoadModule } from 'iwe7/lazy-load';
import { Iwe7DesignModule } from 'iwe7/design';
@NgModule({
  imports: [
    CommonModule,
    // 设计模块
    Iwe7DesignModule,
    // 组件懒加载模块
    Iwe7LazyLoadModule,
    // antd design
    DesignAntdModule
  ],
  declarations: [],
  exports: [
    NzButtonModule,
    DesignAntdModule,
    Iwe7LazyLoadModule,
    Iwe7DesignModule
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
