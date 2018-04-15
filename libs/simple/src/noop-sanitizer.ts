import { Sanitizer, SecurityContext } from '@angular/core';

export class NoopSanitizer implements Sanitizer {
  sanitize(context: SecurityContext, value: {} | string | any): string | any {
    return value;
  }
}
