import { SecurityContext, Sanitizer } from '@angular/core';

import {
  SafeHtml,
  SafeResourceUrl,
  SafeScript,
  SafeStyle,
  SafeUrl,
  SafeValue
} from '../interfaces/safe';

export abstract class DomSanitizer implements Sanitizer {
  abstract sanitize(
    context: SecurityContext,
    value: SafeValue | string | null
  ): string | null;
  abstract bypassSecurityTrustHtml(value: string): SafeHtml;
  abstract bypassSecurityTrustStyle(value: string): SafeStyle;
  abstract bypassSecurityTrustScript(value: string): SafeScript;
  abstract bypassSecurityTrustUrl(value: string): SafeUrl;
  abstract bypassSecurityTrustResourceUrl(value: string): SafeResourceUrl;
}
