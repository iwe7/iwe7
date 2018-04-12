import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignDivComponent } from './design-div.component';

const routes: Routes = [
  {
    path: 'design-div',
    component: DesignDivComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignDivRoutingModule {}
