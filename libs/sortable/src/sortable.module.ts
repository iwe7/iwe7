import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([{
    path: 'sortable',
    loadChildren: './sortable/sortable.module#SortableModule'
  }])]
})
export class SortableModule {}
