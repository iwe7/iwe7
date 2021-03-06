import * as lokijs from 'lokijs';
import { Collection } from 'lokijs';
import { Injectable } from '@angular/core';
import { RenderOptions } from './interface';
import { LokiModel } from './loki';

@Injectable({
  providedIn: 'root'
})
export class RenderElementLokijs extends LokiModel {
  constructor() {
    super('meepo.element');
  }
}
