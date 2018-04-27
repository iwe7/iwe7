import { NgModule } from '@angular/core';
import { TimepickerComponent } from './timepicker';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'iwe7/shared';
@NgModule({
  imports: [CommonModule, FormsModule, SharedModule],
  declarations: [TimepickerComponent],
  entryComponents: [TimepickerComponent]
})
export class TimepickerModule {
  get(key: string) {
    return TimepickerComponent;
  }
}
