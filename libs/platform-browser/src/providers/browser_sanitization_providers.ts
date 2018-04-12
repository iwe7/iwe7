import { StaticProvider, Sanitizer } from '@angular/core';
import { DomSanitizerImpl } from '../classes/dom-sanitizer-impl';
import { DomSanitizer } from '../abstracts/dom-sanitizer';
import { DOCUMENT } from '@angular/common';
export const BROWSER_SANITIZATION_PROVIDERS: StaticProvider[] = [
  { provide: Sanitizer, useExisting: DomSanitizer },
  { provide: DomSanitizer, useClass: DomSanitizerImpl, deps: [DOCUMENT] }
];
