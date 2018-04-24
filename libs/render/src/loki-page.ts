import * as lokijs from 'lokijs';
import { Collection } from 'lokijs';
import { Injectable } from '@angular/core';
import { LokiModel } from './loki';
@Injectable({
  providedIn: 'root'
})
export class LokiPageService extends LokiModel {
  constructor() {
    super('meepo.page');
  }
}
