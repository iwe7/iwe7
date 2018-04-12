import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd';
import { DesignAntdModule } from 'iwe7/design-antd';
import { Iwe7LazyLoadModule } from 'iwe7/lazy-load';
import { Iwe7DesignModule } from 'iwe7/design';
import { Iwe7TouchModule } from 'iwe7/touch';
import { Iwe7WelcomeModule } from 'iwe7/welcome';
import { Iwe7CoreModule } from 'iwe7/core';
import { Iwe7PipesModule } from 'iwe7/pipes';
@NgModule({
  imports: [
    CommonModule,
    // 设计模块
    Iwe7DesignModule,
    // 组件懒加载模块
    Iwe7LazyLoadModule,
    // antd design
    DesignAntdModule,
    // 触摸模块
    Iwe7TouchModule,
    Iwe7WelcomeModule,
    Iwe7CoreModule,
    Iwe7PipesModule
  ],
  declarations: [],
  exports: [
    NzButtonModule,
    DesignAntdModule,
    Iwe7LazyLoadModule,
    Iwe7DesignModule,
    Iwe7TouchModule,
    Iwe7CoreModule,
    Iwe7PipesModule
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    DatePipe
  ]
})
export class SharedModule {}
