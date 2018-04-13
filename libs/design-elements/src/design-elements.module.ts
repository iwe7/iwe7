import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'design-elements-add',
        loadChildren: './design-elements-add/design-elements-add.module#DesignElementsAddModule'
      }
    ])
  ],
})
export class DesignElementsModule {}
