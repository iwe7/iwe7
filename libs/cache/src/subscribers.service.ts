import { Injectable } from '@angular/core';
import { CacheMemoryService } from './chache-memory.service';
import { Subscription } from 'rxjs';
@Injectable()
export class SubscribersService extends CacheMemoryService<Subscription> {
  constructor() {
    super();
  }

  addSub(key: string, subscribtion: Subscription): this {
    let sub = this.get(key);
    if (sub) {
      sub.unsubscribe();
    }
    this.set(key, subscribtion);
    return this;
  }
}
