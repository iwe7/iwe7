import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class TestService {
  index$: BehaviorSubject<number> = new BehaviorSubject(0);
  constructor() {
    let i = 0;
    setInterval(() => {
      i++;
      this.index$.next(i);
    }, 1000);
  }
}
