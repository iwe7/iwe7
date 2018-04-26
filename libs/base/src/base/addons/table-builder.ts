import * as lokijs from 'lokijs';
import { Collection } from 'lokijs';
import { Injectable } from '@angular/core';
import { LokiModel } from 'iwe7/render';

@Injectable({
  providedIn: 'root'
})
export class TableBuilderLoki extends LokiModel {
  constructor() {
    super('meepo.table.builder');
  }
}
