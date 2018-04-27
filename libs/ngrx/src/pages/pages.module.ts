import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesIndexComponent } from './pages-index/pages-index.component';

@NgModule({
  imports: [CommonModule, PagesRoutingModule],
  declarations: [PagesIndexComponent]
})
export class PagesModule {}
