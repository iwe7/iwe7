import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldInputComponent } from './field-input/field-input.component';
import { FieldImageComponent } from './field-image/field-image.component';
import { FieldRangeSliderComponent } from './field-range-slider/field-range-slider.component';
import { FormContainerComponent } from './form-container/form-container.component';
import { PortalModule } from '@angular/cdk/portal';
import { BidiModule } from '@angular/cdk/bidi';

import { FieldRegisterService } from 'iwe7/form/src/field-register.service';
import { CreateComponentDirective } from './create-component.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidatorsHelper } from './validator';
import { Iwe7CoreModule } from 'iwe7/core';
@NgModule({
  imports: [
    CommonModule,
    PortalModule,
    FormsModule,
    ReactiveFormsModule,
    BidiModule,
    Iwe7CoreModule
  ],
  declarations: [
    FieldInputComponent,
    FieldImageComponent,
    FieldRangeSliderComponent,
    FormContainerComponent,
    CreateComponentDirective
  ],
  exports: [
    FieldInputComponent,
    FieldImageComponent,
    FieldRangeSliderComponent,
    FormContainerComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [FieldInputComponent],
  providers: [FieldRegisterService, ValidatorsHelper]
})
export class SchemaFormModule {}
