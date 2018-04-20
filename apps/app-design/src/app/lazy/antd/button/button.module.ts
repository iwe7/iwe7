import { NgModule } from '@angular/core';
import { NzButtonModule } from 'iwe7/antd/button';
import { ButtonComponent } from './button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'iwe7/shared';
@NgModule({
  imports: [CommonModule, NzButtonModule, FormsModule, SharedModule],
  declarations: [ButtonComponent],
  entryComponents: [ButtonComponent]
})
export class ButtonModule {
  get(key: string) {
    return ButtonComponent;
  }
}
