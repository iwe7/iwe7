import { Injectable } from '@angular/core';
import { RenderApp, RenderAppPage } from 'iwe7/render';
import { LokiAppService } from 'iwe7/render/src/loki-app';
import { LokiPageDataService } from 'iwe7/render/src/loki-page-data';
@Injectable({
  providedIn: 'root'
})
export class TableListInstallService {
  constructor(public data: LokiPageDataService) {}

  createOrUpdate() {
    let item = {
      selector: 'table-list',
      code: 'table-list',
      title: '数据库列表',
      inputs: {},
      outputs: {}
    };
    this.data.insertOrUpdate(data => {
      return data.code === item.code;
    }, item);
  }
}
