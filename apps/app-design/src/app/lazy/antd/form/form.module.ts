import { NgModule } from '@angular/core';
import { NzFormModule } from 'iwe7/antd/form';
import { NzButtonModule } from 'iwe7/antd/button';
import { NzGridModule } from 'iwe7/antd/grid';

import { FormComponent } from './form';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'iwe7/shared';
@NgModule({
  imports: [
    CommonModule,
    NzFormModule,
    FormsModule,
    NzButtonModule,
    SharedModule,
    NzGridModule
  ],
  declarations: [FormComponent],
  entryComponents: [FormComponent]
})
export class FormModule {
  get(key: string) {
    return FormComponent;
  }
}
