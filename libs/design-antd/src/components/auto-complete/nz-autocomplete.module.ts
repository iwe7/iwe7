import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzAutocompleteOptgroupComponent } from './nz-autocomplete-optgroup.component';
import { NzAutocompleteOptionComponent } from './nz-autocomplete-option.component';
import { NzAutocompleteTriggerDirective } from './nz-autocomplete-trigger.directive';
import { NzAutocompleteComponent } from './nz-autocomplete.component';

@NgModule({
  declarations: [
    NzAutocompleteComponent,
    NzAutocompleteOptionComponent,
    NzAutocompleteTriggerDirective,
    NzAutocompleteOptgroupComponent
  ],
  exports: [
    NzAutocompleteComponent,
    NzAutocompleteOptionComponent,
    NzAutocompleteTriggerDirective,
    NzAutocompleteOptgroupComponent
  ],
  imports: [CommonModule, OverlayModule, FormsModule]
})
export class NzAutocompleteModule {
  getComponentByName(key: string) {
    if (key === 'nz-autocoomplete') {
      return NzAutocompleteComponent;
    }
    if (key === 'nz-auto-option') {
      return NzAutocompleteOptionComponent;
    }
    if (key === 'nz-auto-optgroup') {
      return NzAutocompleteOptgroupComponent;
    }
  }
}
