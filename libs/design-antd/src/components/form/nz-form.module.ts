import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzGridModule } from '../grid/nz-grid.module';
import { NzFormControlComponent } from './nz-form-control.component';
import { NzFormExplainComponent } from './nz-form-explain.component';
import { NzFormExtraComponent } from './nz-form-extra.component';
import { NzFormItemComponent } from './nz-form-item.component';
import { NzFormLabelComponent } from './nz-form-label.component';
import { NzFormSplitComponent } from './nz-form-split.component';
import { NzFormTextComponent } from './nz-form-text.component';
import { NzFormDirective } from './nz-form.directive';

@NgModule({
  declarations: [
    NzFormExtraComponent,
    NzFormLabelComponent,
    NzFormDirective,
    NzFormItemComponent,
    NzFormControlComponent,
    NzFormExplainComponent,
    NzFormTextComponent,
    NzFormSplitComponent
  ],
  exports: [
    NzFormExtraComponent,
    NzFormLabelComponent,
    NzFormDirective,
    NzFormItemComponent,
    NzFormControlComponent,
    NzFormExplainComponent,
    NzFormTextComponent,
    NzFormSplitComponent
  ],
  imports: [CommonModule, NzGridModule]
})
export class NzFormModule {
  getComponentByName(key: string) {
    if (key === 'nz-form-extra') {
      return NzFormExtraComponent;
    }
    if (key === 'nz-form-label') {
      return NzFormLabelComponent;
    }
    if (key === 'nz-form-item') {
      return NzFormItemComponent;
    }
    if (key === 'nz-form-control') {
      return NzFormControlComponent;
    }
    if (key === 'nz-form-explain') {
      return NzFormExplainComponent;
    }
    if (key === 'nz-form-text') {
      return NzFormTextComponent;
    }
    if (key === 'nz-form-split') {
      return NzFormSplitComponent;
    }
  }
}
