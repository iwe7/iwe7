import { NgModule } from '@angular/core';
import { NzRadioModule } from 'iwe7/antd/radio';
import { RadioComponent } from './radio';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule, NzRadioModule, FormsModule],
  declarations: [RadioComponent],
  entryComponents: [RadioComponent]
})
export class RadioModule {
  get(key: string) {
    return RadioComponent;
  }
}
