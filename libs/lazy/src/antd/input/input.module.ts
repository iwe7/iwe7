import { NgModule } from '@angular/core';
import { NzInputModule } from 'iwe7/antd/input';
import { Iwe7InputComponent } from './input';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule, NzInputModule, FormsModule],
  declarations: [Iwe7InputComponent],
  entryComponents: [Iwe7InputComponent]
})
export class InputModule {
  get(key: string) {
    return Iwe7InputComponent;
  }
}
