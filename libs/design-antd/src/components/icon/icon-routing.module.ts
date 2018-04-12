import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IconComponent } from './icon.component';
import { LazyComponentModuleBase } from 'iwe7/lazy-load';
const routes: Routes = [
  {
    path: 'nz-icon',
    component: IconComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconRoutingModule extends LazyComponentModuleBase {
  getComponentByName(key: string) {
    return IconComponent;
  }
}
