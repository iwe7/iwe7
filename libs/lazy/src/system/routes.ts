import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'sys-header',
        loadChildren: './sys-header/sys-header.module#SysHeaderModule'
      },
      {
        path: 'sys-figcaption',
        loadChildren: './figcaption/figcaption.module#SysFigcaptionModule'
      },
      {
        path: 'sys-background-video',
        loadChildren:
          './background-video/background-video.module#SysBackgroundVideoModule'
      },
      {
        path: 'sys-fullpage',
        loadChildren: './fullpage/fullpage.module#SysFullpageModule'
      },
      {
        path: 'sys-swiper',
        loadChildren: './swiper/swiper.module#SysSwiperModule'
      }
    ])
  ]
})
export class SystemRoutesModule {}
