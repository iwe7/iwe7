import { NgModule, Provider, Optional, SkipSelf } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { I18nPipe, NzI18nPipe } from './i18n.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [I18nPipe, NzI18nPipe],
  exports: [I18nPipe, NzI18nPipe],
  providers: [DatePipe]
})
export class I18nModule {}
