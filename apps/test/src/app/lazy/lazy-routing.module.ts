import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyTestComponent } from './lazy-test/lazy-test.component';

const routes: Routes = [
  {
    path: '',
    component: LazyTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule {}
