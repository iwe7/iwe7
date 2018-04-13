import { Injectable } from '@angular/core';
import { ChacheMemoryService } from 'iwe7/cache';
@Injectable({
  providedIn: 'root'
})
export class DesignElementsService extends ChacheMemoryService<any> {
  constructor() {
    super();
  }
}
