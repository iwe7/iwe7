import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzBreadCrumbItemComponent } from './nz-breadcrumb-item.component';
import { NzBreadCrumbComponent } from './nz-breadcrumb.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NzBreadCrumbComponent, NzBreadCrumbItemComponent],
  exports: [NzBreadCrumbComponent, NzBreadCrumbItemComponent]
})
export class NzBreadCrumbModule {
  getComponentByName(key: string) {
    if (key === 'nz-bread-crumb') {
      return NzBreadCrumbComponent;
    }
    if (key === 'nz-bread-crump-item') {
      return NzBreadCrumbItemComponent;
    }
  }
}
