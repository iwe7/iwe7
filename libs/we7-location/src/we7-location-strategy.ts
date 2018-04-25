import {
  LocationStrategy,
  LocationChangeListener,
  PlatformLocation,
  Location
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
    const url = Location.joinWithSlash(this._path, internal);
    return url;
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
