import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { KeysPipe } from './keys.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetViewDirective } from './get-view';
import { GetTemplateDirective } from './get-template';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [KeysPipe, GetViewDirective, GetTemplateDirective],
  exports: [
    KeysPipe,
    GetViewDirective,
    GetTemplateDirective,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe, KeysPipe]
})
export class SharedModule {}
