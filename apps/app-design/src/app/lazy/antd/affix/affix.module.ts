import { NgModule } from '@angular/core';
import { AffixComponent } from './affix';
import { NzAffixModule } from 'iwe7/antd/affix';
import { NzButtonModule } from 'iwe7/antd/button';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'iwe7/shared';
@NgModule({
  imports: [CommonModule, SharedModule, NzAffixModule, NzButtonModule],
  declarations: [AffixComponent],
  entryComponents: [AffixComponent]
})
export class AffixModule {
  get(key: string) {
    return AffixComponent;
  }
}
