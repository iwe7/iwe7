import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeIndexComponent } from './welcome-index.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeIndexRoutingModule {}
