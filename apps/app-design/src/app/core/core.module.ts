import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Iwe7DesignModule } from 'iwe7/design';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  declarations: [],
  exports: [
    BrowserAnimationsModule
  ]
})
export class CoreModule { }
