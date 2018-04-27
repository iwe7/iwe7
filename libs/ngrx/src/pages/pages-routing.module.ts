import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesIndexComponent } from './pages-index/pages-index.component';

const routes: Routes = [
  {
    path: '**',
    component: PagesIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
