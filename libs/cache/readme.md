### cache memory

```ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChacheMemoryService<T> {
  data: Map<string, any> = new Map();
  constructor() {}
  // 取数据
  get<T>(key: string): T {
    return this.data.get(key) || {};
  }
  // 设置数据
  set(key: string, val: any): this {
    this.data.set(key, val);
    return this;
  }
  // 删除数据
  delete(key: string): this {
    this.data.delete(key);
    return this;
  }
  // 清空
  clear(): this {
    this.data.clear();
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
}
```
