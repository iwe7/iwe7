import { Injectable, Inject } from '@angular/core';
import { fromEvent, Observable, Subject } from 'rxjs';
import {
  map,
  tap,
  switchMap,
  takeUntil,
  takeLast,
  debounceTime,
  filter
} from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
let elementMap: Map<string, Element> = new Map();
import * as Transform from 'css3transform';
// 如何保证数据同步更新
@Injectable({
  providedIn: 'root'
})
export class ElementControler {}
