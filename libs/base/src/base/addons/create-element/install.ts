import { Injectable } from '@angular/core';
import { RenderApp, RenderAppPage } from 'iwe7/render';
import { LokiAppService } from 'iwe7/render/src/loki-app';
import { LokiPageDataService } from 'iwe7/render/src/loki-page-data';
@Injectable({
  providedIn: 'root'
})
export class CreateElementInstallService {
  constructor(public data: LokiPageDataService) {}

  createOrUpdate() {
    let item = {
      selector: 'create-element',
      code: 'create.element',
      title: '创建元素',
      inputs: {},
      outputs: {}
    };
    this.data.insertOrUpdate(data => {
      return data.code === item.code;
    }, item);
  }
}
