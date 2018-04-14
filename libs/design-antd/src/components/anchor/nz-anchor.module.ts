import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzAffixModule } from '../affix/nz-affix.module';

import { NzAnchorLinkComponent } from './nz-anchor-link.component';
import { NzAnchorComponent } from './nz-anchor.component';

@NgModule({
  declarations: [NzAnchorComponent, NzAnchorLinkComponent],
  exports: [NzAnchorComponent, NzAnchorLinkComponent],
  imports: [CommonModule, NzAffixModule],
  entryComponents: [NzAnchorComponent, NzAnchorLinkComponent]
})
export class NzAnchorModule {
  getComponentByName(key: string) {
    if (key === 'nz-anchor') {
      return NzAnchorComponent;
    } else {
      return NzAnchorLinkComponent;
    }
  }
}
