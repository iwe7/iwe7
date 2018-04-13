import { Injectable } from '@angular/core';
import { CacheMemory } from './chache-memory.service';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscribersService extends CacheMemory<Subscription> {
  desc: string = '大家好我是，subscribers service，我服保存订阅';
  constructor() {
    super();
  }

  private unsubscribe(key: string) {
    let sub = this.get(key);
    if (sub && sub['unsubscribe']) {
      sub.unsubscribe();
    }
  }

  public addSub(key: string, subscribtion: Subscription): this {
    this.unsubscribe(key);
    this.set(key, subscribtion);
    return this;
  }

  public destory(key: string) {
    this.unsubscribe(key);
    this.delete(key);
  }
}
