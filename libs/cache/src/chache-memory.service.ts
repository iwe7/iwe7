import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { map } from 'underscore';
@Injectable({
  providedIn: 'root'
})
export class ChacheMemoryService<T> {
  data: Map<string, any> = new Map();
  data$: Subject<Map<string, any>> = new Subject();
  constructor() {}

  onChange(): Observable<Map<string, any>> {
    return this.data$;
  }

  init(data: any) {
    this.data = new Map(data);
  }
  // 取数据
  get<T>(key: string): T {
    return this.data.get(key) || {};
  }
  // 设置数据
  set(key: string, val: any): this {
    this.data.set(key, val);
    this.data$.next(this.data);
    return this;
  }
  // 删除数据
  delete(key: string): this {
    this.data.delete(key);
    this.data$.next(this.data);
    return this;
  }
  // 清空
  clear(): this {
    this.data.clear();
    this.data$.next(this.data);
    return this;
  }
  // 是否存在
  has(key: string) {
    return this.data.has(key);
  }
  // 循环
  forEach(
    callbackfn: (value: any, key: string, map: Map<string, any>) => void
  ): this {
    this.data.forEach(callbackfn);
    return this;
  }
  // 保存到缓存
  saveToLocalStorage(key: string) {
    let data = {};
    this.forEach((item, key, map) => {
      data[key] = item;
    });
    localStorage.setItem(key, JSON.stringify(data));
  }

  initFromLoacalStorage(key: string) {
    let item: any = localStorage.getItem(key);
    if (!!item) {
      item = JSON.parse(item);
      let data: any = map(item, (item, key) => {
        return [key + '', item];
      });
      this.data = new Map(data);
      return this;
    }
  }
}
