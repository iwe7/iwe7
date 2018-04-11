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
      }
    ])
  ],
  exports: [],
  declarations: [],
  providers: []
})
export class NgZorroAntdLazyModule {}
