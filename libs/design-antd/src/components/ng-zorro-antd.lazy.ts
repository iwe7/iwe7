import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'nz-button',
        loadChildren: './button/nz-button.module#NzButtonModule'
      },
      {
        path: 'nz-icon',
        loadChildren: './icon/icon.module#NzIconModule'
      },
      {
        path: 'nz-calendar',
        loadChildren: './calendar/nz-calendar.module#NzCalendarModule'
      }
    ])
  ],
  exports: [],
  declarations: [],
  providers: []
})
export class NgZorroAntdLazyModule {}
