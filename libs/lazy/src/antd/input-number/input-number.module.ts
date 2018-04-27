import { NgModule } from '@angular/core';
import { NzInputNumberModule } from 'iwe7/antd/input-number';
import { Iwe7InputNumberComponent } from './input-number';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule, NzInputNumberModule, FormsModule],
  declarations: [Iwe7InputNumberComponent],
  entryComponents: [Iwe7InputNumberComponent]
})
export class InputNumberModule {
  get(key: string) {
    return Iwe7InputNumberComponent;
  }
}
