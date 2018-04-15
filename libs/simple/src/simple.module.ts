import {
  NgModule,
  ErrorHandler,
  RendererFactory2,
  Sanitizer
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomPluginRendererFactory } from './dom-plugin-render';
import { NoopSanitizer } from './noop-sanitizer';
@NgModule({
  providers: [
    { provide: ErrorHandler, useClass: ErrorHandler, deps: [] },
    { provide: RendererFactory2, useClass: DomPluginRendererFactory },
    { provide: Sanitizer, useClass: NoopSanitizer }
  ]
})
export class SimpleModule {}
