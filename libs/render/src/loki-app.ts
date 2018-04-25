import * as lokijs from 'lokijs';
import { Collection } from 'lokijs';
import { Injectable } from '@angular/core';
import { LokiModel } from './loki';
import { RenderApp } from './interface';
@Injectable({
  providedIn: 'root'
})
export class LokiAppService extends LokiModel {
  constructor() {
    super('meepo.app');
    this.initSystemApp();
  }

  // 系统应用
  initSystemApp() {

  }

  // 空白应用
  createBlankApp() {}
  // 模板应用
  createTemplateApp() {}
}
