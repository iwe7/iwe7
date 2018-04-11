import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AntdButtonSettingComponent } from './antd-button-setting.component';

const routes: Routes = [
  {
    path: '',
    component: AntdButtonSettingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AntdButtonSettingRoutingModule {}
