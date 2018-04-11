import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AntdButtonComponent } from './antd-button.component';

const routes: Routes = [
  {
    path: '',
    component: AntdButtonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AntdButtonRoutingModule {}
