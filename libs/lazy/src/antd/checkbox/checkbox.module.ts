import { NgModule } from '@angular/core';
import { NzCheckboxModule } from 'iwe7/antd/checkbox';
import { CheckboxComponent } from './checkbox';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'iwe7/shared';
import { CheckboxGroupComponent } from './checkbox-group/checkbox-group';
@NgModule({
  imports: [CommonModule, NzCheckboxModule, FormsModule, SharedModule],
  declarations: [CheckboxComponent, CheckboxGroupComponent],
  entryComponents: [CheckboxComponent, CheckboxGroupComponent]
})
export class CheckboxModule {
  get(key: string) {
    if (key === 'nz-checkbox') {
      return CheckboxComponent;
    } else {
      return CheckboxGroupComponent;
    }
  }
}
