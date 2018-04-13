import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'nz-affix',
        loadChildren: './affix/nz-affix.module#NzAffixModule'
      },
      {
        path: 'nz-button',
        loadChildren: './button/nz-button.module#NzButtonModule'
      },
      {
        path: 'nz-calendar',
        loadChildren: './calendar/nz-calendar.module#NzCalendarModule'
      },
      {
        path: 'nz-avatar',
        loadChildren: './avatar/nz-avatar.module#NzAvatarModule'
      },
      {
        path: 'nz-row',
        loadChildren: './grid/nz-grid.module#NzGridModule'
      },
      {
        path: 'nz-col',
        loadChildren: './grid/nz-grid.module#NzGridModule'
      }
    ])
  ],
  exports: [],
  declarations: [],
  providers: []
})
export class NgZorroAntdLazyModule {}
