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
import { CoreModule } from './core/core.module';
import { LazyModule } from './lazy/lazy.module';

import { OverlayModule } from '@angular/cdk/overlay';

import { BaseModule, AppPreviewModule } from 'iwe7/base';
import { SharedModule } from 'iwe7/shared';

import { LocationStrategy } from '@angular/common';
import { We7LocationStrategy } from 'iwe7/we7-location';

@NgModule({
  imports: [
    BrowserModule,
    // 路由模块
    RouterModule.forRoot([
      {
        path: 'test',
        component: AppComponent
      },
      {
        path: 'test2',
        component: AppComponent
      }
    ]),
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
    },
    {
      provide: LocationStrategy,
      useClass: We7LocationStrategy
    }
  ]
})
export class AppModule {}
