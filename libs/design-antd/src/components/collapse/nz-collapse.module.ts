import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzCollapsePanelComponent } from './nz-collapse-panel.component';
import { NzCollapseComponent } from './nz-collapse.component';

@NgModule({
  declarations: [NzCollapsePanelComponent, NzCollapseComponent],
  exports: [NzCollapsePanelComponent, NzCollapseComponent],
  imports: [CommonModule]
})
export class NzCollapseModule {
  getComponentByName(key: string) {
    if (key === 'nz-collapse') {
      return NzCollapsePanelComponent;
    } else {
      return NzCollapseComponent;
    }
  }
}
