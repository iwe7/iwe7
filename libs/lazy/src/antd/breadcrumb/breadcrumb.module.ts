import { NgModule } from '@angular/core';
import { BreadcrumbComponent } from './breadcrumb';
import { NzBreadCrumbModule } from 'iwe7/antd/breadcrumb';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'iwe7/shared';
@NgModule({
  imports: [CommonModule, SharedModule, NzBreadCrumbModule],
  declarations: [BreadcrumbComponent],
  entryComponents: [BreadcrumbComponent]
})
export class BreadcrumbModule {
  get(key: string) {
    return BreadcrumbComponent;
  }
}
