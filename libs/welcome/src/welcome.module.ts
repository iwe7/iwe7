import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'iwe7-welcome-index',
        loadChildren: './welcome-index/welcome-index.module#WelcomeIndexModule'
      }
    ])
  ]
})
export class Iwe7WelcomeModule {

}
