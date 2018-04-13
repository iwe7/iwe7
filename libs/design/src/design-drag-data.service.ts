import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignDragDataService {
  data: any;
  constructor() {}

  set(val: any) {
    this.data = val;
  }

  get() {
    return this.data;
  }

  clear() {
    this.data = null;
  }
}
