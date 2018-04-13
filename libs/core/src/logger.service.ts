import {
  Inject,
  Injectable,
  InjectionToken,
  Optional,
  Provider,
  SkipSelf,
  isDevMode
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  constructor(@Inject(IWE7_LOGGER_SHOW) private isShow: boolean) {}

  log(...args: any[]): void {
    if (isDevMode() && this.isShow) {
      console.log.apply(console, arguments);
    }
  }

  warn(...args: any[]): void {
    if (isDevMode() && this.isShow) {
      console.warn.apply(console, arguments);
    }
  }

  error(...args: any[]): void {
    if (isDevMode() && this.isShow) {
      console.error.apply(console, arguments);
    }
  }

  info(...args: any[]): void {
    if (isDevMode() && this.isShow) {
      console.log.apply(console, arguments);
    }
  }

  debug(...args: any[]): void {
    if (isDevMode() && this.isShow) {
      const arrs = Array.prototype.slice.call(arguments);
      console.log.apply(console, ['[NG-ZORRO-DEBUG]'].concat(arrs));
    }
  }
}

export const IWE7_LOGGER_SHOW = new InjectionToken<boolean>(
  'IWE7_LOGGER_SHOW',
  {
    providedIn: 'root',
    factory: () => true
  }
);
