import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'table-page',
    loadChildren: './table-page.module#TablePageModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class TablePageRoutingModule {}
