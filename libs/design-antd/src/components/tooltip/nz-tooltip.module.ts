import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzToolTipComponent } from './nz-tooltip.component';
import { NzTooltipDirective } from './nz-tooltip.directive';

@NgModule({
  declarations: [NzToolTipComponent, NzTooltipDirective],
  exports: [NzToolTipComponent, NzTooltipDirective],
  imports: [CommonModule, OverlayModule],
  entryComponents: [NzToolTipComponent]
})
export class NzToolTipModule {
  getComponentByName(key: string) {
    if (key === 'nz-tooltip') {
      return NzToolTipComponent;
    }
    if (key === 'nz-tooltip-directive') {
      return NzTooltipDirective;
    }
  }
}
