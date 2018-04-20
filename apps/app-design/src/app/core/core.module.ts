import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [CommonModule, BrowserAnimationsModule, HttpClientModule],
  declarations: [],
  exports: [BrowserAnimationsModule],
  providers: []
})
export class CoreModule {}
