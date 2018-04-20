import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';

import { LayoutModule } from './layout.module';

@NgModule({
  imports: [LayoutModule],
  entryComponents: [
    LayoutComponent
  ]
})
export class LayoutLazyModule {}
