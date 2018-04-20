import { NgModule } from '@angular/core';
import { NzInputModule } from 'iwe7/antd/input';
import { Iwe7TextareaComponent } from './textarea';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule, NzInputModule, FormsModule],
  declarations: [Iwe7TextareaComponent],
  entryComponents: [Iwe7TextareaComponent]
})
export class TextareaModule {
  get(key: string) {
    return Iwe7TextareaComponent;
  }
}
