import { Injectable } from '@angular/core';
import { CacheMemoryService } from 'iwe7/cache';
@Injectable({
  providedIn: 'root'
})
export class DesignElementsService extends CacheMemoryService<any> {
  constructor() {
    super();
  }
}
