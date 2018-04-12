import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChacheMemoryService<T> {
  data: Map<string, any> = new Map();
  constructor() {}

  get<T>(key: string): T {
    return this.data.get(key) || {};
  }

  set(key: string, val: any): this {
    this.data.set(key, val);
    return this;
  }

  delete(key: string) {
    this.data.delete(key);
  }

  clear() {
    this.data.clear();
  }

  has(key: string) {
    this.data.has(key);
  }

  forEach(
    callbackfn: (value: any, key: string, map: Map<string, any>) => void
  ) {
    this.data.forEach(callbackfn);
  }
}
