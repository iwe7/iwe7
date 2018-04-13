import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'd3-pie',
        loadChildren: './d3-pie/d3-pie.module#D3PieModule'
      }
    ])
  ],
  declarations: []
})
export class D3Module {}
