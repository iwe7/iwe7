import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageIndexComponent } from './page-index/page-index.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PageIndexComponent
      },
      {
        path: '**',
        component: PageIndexComponent
      }
    ])
  ],
  declarations: [PageIndexComponent]
})
export class PagesModule {}
