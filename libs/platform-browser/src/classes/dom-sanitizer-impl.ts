import {
  Injectable,
  Sanitizer,
  SecurityContext,
  Inject,
  ɵ_sanitizeHtml as _sanitizeHtml,
  ɵ_sanitizeStyle as _sanitizeStyle,
  ɵ_sanitizeUrl as _sanitizeUrl
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

import {
  SafeHtml,
  SafeResourceUrl,
  SafeScript,
  SafeStyle,
  SafeUrl,
  SafeValue
} from '../interfaces/safe';

import { DomSanitizer } from '../abstracts/dom-sanitizer';
import { SafeValueImpl } from '../abstracts/SafeValueImpl';
import {
  SafeHtmlImpl,
  SafeResourceUrlImpl,
  SafeScriptImpl,
  SafeStyleImpl,
  SafeUrlImpl
} from './safe';

@Injectable()
export class DomSanitizerImpl extends DomSanitizer {
  constructor(@Inject(DOCUMENT) private _doc: any) {
    super();
  }

  sanitize(
    ctx: SecurityContext,
    value: SafeValue | string | null
  ): string | null {
    if (value == null) return null;
    switch (ctx) {
      case SecurityContext.NONE:
        return value as string;
      case SecurityContext.HTML:
        if (value instanceof SafeHtmlImpl)
          return value.changingThisBreaksApplicationSecurity;
        this.checkNotSafeValue(value, 'HTML');
        return _sanitizeHtml(this._doc, String(value));
      case SecurityContext.STYLE:
        if (value instanceof SafeStyleImpl)
          return value.changingThisBreaksApplicationSecurity;
        this.checkNotSafeValue(value, 'Style');
        return _sanitizeStyle(value as string);
      case SecurityContext.SCRIPT:
        if (value instanceof SafeScriptImpl)
          return value.changingThisBreaksApplicationSecurity;
        this.checkNotSafeValue(value, 'Script');
        throw new Error('unsafe value used in a script context');
      case SecurityContext.URL:
        if (
          value instanceof SafeResourceUrlImpl ||
          value instanceof SafeUrlImpl
        ) {
          return value.changingThisBreaksApplicationSecurity;
        }
        this.checkNotSafeValue(value, 'URL');
        return _sanitizeUrl(String(value));
      case SecurityContext.RESOURCE_URL:
        if (value instanceof SafeResourceUrlImpl) {
          return value.changingThisBreaksApplicationSecurity;
        }
        this.checkNotSafeValue(value, 'ResourceURL');
        throw new Error(
          'unsafe value used in a resource URL context (see http://g.co/ng/security#xss)'
        );
      default:
        throw new Error(
          `Unexpected SecurityContext ${ctx} (see http://g.co/ng/security#xss)`
        );
    }
  }

  private checkNotSafeValue(value: any, expectedType: string) {
    if (value instanceof SafeValueImpl) {
      throw new Error(
        `Required a safe ${expectedType}, got a ${value.getTypeName()} ` +
          `(see http://g.co/ng/security#xss)`
      );
    }
  }

  bypassSecurityTrustHtml(value: string): SafeHtml {
    return new SafeHtmlImpl(value);
  }
  bypassSecurityTrustStyle(value: string): SafeStyle {
    return new SafeStyleImpl(value);
  }
  bypassSecurityTrustScript(value: string): SafeScript {
    return new SafeScriptImpl(value);
  }
  bypassSecurityTrustUrl(value: string): SafeUrl {
    return new SafeUrlImpl(value);
  }
  bypassSecurityTrustResourceUrl(value: string): SafeResourceUrl {
    return new SafeResourceUrlImpl(value);
  }
}
