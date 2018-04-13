import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignViewComponent } from './design-view/design-view.component';
import { DesignMobileViewComponent } from './design-mobile-view/design-mobile-view.component';
import { NzSpinModule } from 'iwe7/design-antd/src/components/spin/nz-spin.module';
import { Iwe7CoreModule } from 'iwe7/core';
@NgModule({
  imports: [CommonModule, NzSpinModule, Iwe7CoreModule],
  declarations: [DesignViewComponent, DesignMobileViewComponent],
  exports: [DesignViewComponent, DesignMobileViewComponent]
})
export class DesignViewModule {}
