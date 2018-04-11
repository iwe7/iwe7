import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'nz-button',
        loadChildren: './button/nz-button.module#NzButtonModule'
      }
    ])
  ],
  exports: [],
  declarations: [],
  providers: []
})
export class NgZorroAntdLazyModule {}
