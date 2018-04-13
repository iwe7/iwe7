import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzAffixModule } from '../affix/nz-affix.module';

import { NzAnchorLinkComponent } from './nz-anchor-link.component';
import { NzAnchorComponent } from './nz-anchor.component';

@NgModule({
  declarations: [ NzAnchorComponent, NzAnchorLinkComponent ],
  exports     : [ NzAnchorComponent, NzAnchorLinkComponent ],
  imports     : [ CommonModule, NzAffixModule ]
})
export class NzAnchorModule {
}
