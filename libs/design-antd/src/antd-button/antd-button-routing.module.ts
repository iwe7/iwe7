import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'design-button',
    loadChildren: './antd-button/antd-button.module#AntdButtonModule'
  },
  {
    path: 'design-button-setting',
    loadChildren:
      './antd-button-setting/antd-button-setting.module#AntdButtonSettingModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AntdButtonRoutingModule {}
