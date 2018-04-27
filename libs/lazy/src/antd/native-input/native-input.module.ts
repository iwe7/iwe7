import { NgModule } from '@angular/core';
import { NativeInputComponent } from './native-input';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'iwe7/shared';
@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [NativeInputComponent],
  entryComponents: [NativeInputComponent]
})
export class NativeInputModule {
  get(key: string) {
    return NativeInputComponent;
  }
}
