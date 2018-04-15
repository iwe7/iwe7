import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { BidiModule } from '@angular/cdk/bidi';

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
  declarations: [],
  exports: [FormsModule, ReactiveFormsModule],
  entryComponents: [],
  providers: [ValidatorsHelper]
})
export class SchemaFormModule {}
