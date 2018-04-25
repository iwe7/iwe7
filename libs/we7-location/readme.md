> angular提供两个路由策略，一个path，一个hash一般来说就够用了，但是项目总会有特殊的需求，比如一些老的系统路由规则还是
```
?c=控制器&do=执行函数&m=模块代号
```
之类的，下面我们通过LocationStrategy结构自定义属于我们自己的路由，其实实现还蛮简单的，但是我作为一个新手，期间还是走了很多弯路，为了让其他人少走弯路，特此分享！
```
import {
  LocationStrategy,
  LocationChangeListener,
  PlatformLocation
} from '@angular/common';
import { Injectable } from '@angular/core';
import { parseURL, serializeQueryParams } from './util';
@Injectable({
  providedIn: 'root'
})
export class We7LocationStrategy extends LocationStrategy {
  _path: string;
  constructor(private _platformLocation: PlatformLocation) {
    super();
  }
  path(includeHash?: boolean): string {
    this._path = location.pathname;
    let parse = parseURL() || {};
    return parse.do ? parse.do + '' : '';
  }
  prepareExternalUrl(internal: string): string {
    let _do = internal.replace('/', '');
    let parse = parseURL() || {};
    parse['do'] = _do;
    let newUrl = serializeQueryParams(parse);
    return this._path + newUrl;
  }
  pushState(state: any, title: string, url: string, queryParams: string): void {
    let _do = url.replace('/', '');
    let parse = parseURL() || {};
    parse['do'] = _do;
    let newUrl = serializeQueryParams(parse);
    this._platformLocation.pushState(state, title, this._path + newUrl);
  }
  replaceState(
    state: any,
    title: string,
    url: string,
    queryParams: string
  ): void {
    let _do = url.replace('/', '');
    let parse = parseURL() || {};
    parse['do'] = _do;
    let newUrl = serializeQueryParams(parse);
    this._platformLocation.replaceState(state, title, this._path + newUrl);
  }
  forward(): void {
    this._platformLocation.forward();
  }
  back(): void {
    this._platformLocation.back();
  }
  onPopState(fn: LocationChangeListener): void {
    this._platformLocation.onPopState(fn);
    this._platformLocation.onHashChange(fn);
  }
  getBaseHref(): string {
    return this._path ? this._path + '' : './';
  }
}
```
