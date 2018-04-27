import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA,
  LOCALE_ID
} from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { CoreModule } from 'iwe7/core';
import { LazyModule } from 'iwe7/lazy';

import { OverlayModule } from '@angular/cdk/overlay';

import { BaseModule, AppPreviewModule } from 'iwe7/base';
import { SharedModule } from 'iwe7/shared';
import { PagesModule } from 'iwe7/pages';
@NgModule({
  imports: [
    BrowserModule,
    PagesModule,
    // 路由模块
    RouterModule.forRoot([]),
    // 公用
    SharedModule,
    // 核心
    CoreModule,
    // 懒加载模块
    LazyModule,
    LayoutModule,
    OverlayModule,
    BaseModule,
    AppPreviewModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'zh-cn'
    }
  ]
})
export class AppModule {}
