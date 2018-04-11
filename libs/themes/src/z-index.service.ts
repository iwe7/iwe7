import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZIndexService {
  index: number = 1000;
  constructor() {}

  getIndex() {
    return this.index++;
  }
}
