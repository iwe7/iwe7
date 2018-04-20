import { NgModule } from '@angular/core';
import { PaginationComponent } from './pagination';
import { NzPaginationModule } from 'iwe7/antd/pagination';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'iwe7/shared';
@NgModule({
  imports: [CommonModule, SharedModule, NzPaginationModule],
  declarations: [PaginationComponent],
  entryComponents: [PaginationComponent]
})
export class PaginationModule {
  get(key: string) {
    return PaginationComponent;
  }
}
