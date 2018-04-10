export interface RxjsModelSearchParams {
  where: string;
  params: { [key: string]: string };
  orderBy: string;
  limit: [number, number];
}
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, switchMap, map } from 'rxjs/operators';
import * as IndexDb from './indexdb/index';
@Injectable({
  providedIn: 'root'
})
export class RxjsModel<T> {
  constructor() {
    console.log(IndexDb);
  }

  // 增
  add(item: T) {}
  // 删
  remove(id: string | number) {}
  // 改
  modify(item: T) {}
  // 查
  search(params: {}) {}
}
