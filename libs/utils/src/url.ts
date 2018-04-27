import { Injectable, isDevMode } from '@angular/core';
import { global, parseURL, serializeQueryParams } from './global';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  get params() {
    return this.parseURL();
  }
  constructor() {}

  getUrl(__do, __params = {}) {
    let params = this.params;
    params['c'] = 'entry';
    params['do'] = 'open';
    params['open'] = __do;
    params['m'] = 'runner_open';
    if (isDevMode()) {
      params['i'] = '2';
    }
    __params = {
      ...__params,
      ...params
    };
    return this.getRoot() + this.serializeQueryParams(__params);
  }

  private getRoot() {
    let location = global.location;
    if (isDevMode()) {
      return 'https://meepo.com.cn/app/index.php';
    } else {
      let path = `${location.protocol}//${location.host}${location.pathname}`;
      return path;
    }
  }

  private parseURL() {
    return parseURL();
  }

  private serializeQueryParams(obj: any) {
    return serializeQueryParams(obj);
  }
}
