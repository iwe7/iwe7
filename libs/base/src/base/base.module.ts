import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NzMessageModule } from 'iwe7/antd/message';
import { NzModalModule } from 'iwe7/antd/modal';


@NgModule({
  imports: [
    NzMessageModule,
    NzModalModule,
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
      },
      {
        path: 'base-context-menu',
        loadChildren: './context-menu/context-menu.module#BaseContextMenuModule'
      },
      {
        path: 'base-list',
        loadChildren: './list/list.module#BaseListModule'
      },
      {
        path: 'base-help-header',
        loadChildren: './help-header/help-header.module#BaseHelpHeaderModule'
      },
      {
        path: 'base-page',
        loadChildren: './page/page.module#BasePageModule'
      },
      {
        path: 'base-meepo-modal',
        loadChildren: './base-modal/modal.module#BaseModalModule'
      },
      {
        path: 'code-mirror',
        loadChildren: './addons/code-mirror/src/code-mirror.module#CodeMirrorModule'
      },
      {
        path: 'create-element',
        loadChildren: './addons/create-element/src/create-element.module#CreateElementModule'
      },
      {
        path: 'ruler',
        loadChildren: './addons/ruler/src/ruler.module#RulerModule'
      },
      {
        path: 'table-builder',
        loadChildren: './addons/table/table-builder/table-builder.module#TableBuilderModule'
      },
      {
        path: 'table-list',
        loadChildren: './addons/table/table-list/table-list.module#TableListModule'
      }
    ])
  ]
})
export class BaseModule {}
