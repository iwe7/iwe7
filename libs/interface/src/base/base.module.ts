import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NzMessageModule } from 'iwe7/antd/message';
@NgModule({
  imports: [
    NzMessageModule,
    RouterModule.forChild([
      {
        path: 'base-control',
        loadChildren: './control/control.module#ControlModule'
      },
      {
        path: 'base-text',
        loadChildren: './text/text.module#BaseTextModule'
      },
      {
        path: 'base-view',
        loadChildren: './view/view.module#BaseViewModule'
      }
    ])
  ]
})
export class BaseModule {}
