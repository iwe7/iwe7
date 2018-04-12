/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {
  Inject,
  Injectable,
  Sanitizer,
  SecurityContext,
  ɵ_sanitizeHtml as _sanitizeHtml,
  ɵ_sanitizeStyle as _sanitizeStyle,
  ɵ_sanitizeUrl as _sanitizeUrl
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

export { SecurityContext };

export interface SafeValue {}
export interface SafeHtml extends SafeValue {}
export interface SafeStyle extends SafeValue {}
export interface SafeScript extends SafeValue {}
export interface SafeUrl extends SafeValue {}
export interface SafeResourceUrl extends SafeValue {}

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
          // Allow resource URLs in URL contexts, they are strictly more trusted.
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

abstract class SafeValueImpl implements SafeValue {
  constructor(public changingThisBreaksApplicationSecurity: string) {
    // empty
  }
  abstract getTypeName(): string;
  toString() {
    return (
      `SafeValue must use [property]=binding: ${
        this.changingThisBreaksApplicationSecurity
      }` + ` (see http://g.co/ng/security#xss)`
    );
  }
}

class SafeHtmlImpl extends SafeValueImpl implements SafeHtml {
  getTypeName() {
    return 'HTML';
  }
}
class SafeStyleImpl extends SafeValueImpl implements SafeStyle {
  getTypeName() {
    return 'Style';
  }
}
class SafeScriptImpl extends SafeValueImpl implements SafeScript {
  getTypeName() {
    return 'Script';
  }
}
class SafeUrlImpl extends SafeValueImpl implements SafeUrl {
  getTypeName() {
    return 'URL';
  }
}
class SafeResourceUrlImpl extends SafeValueImpl implements SafeResourceUrl {
  getTypeName() {
    return 'ResourceURL';
  }
}
