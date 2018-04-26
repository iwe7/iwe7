import { Injectable } from '@angular/core';
import { RenderApp, RenderAppPage } from 'iwe7/render';
import { LokiAppService } from 'iwe7/render/src/loki-app';
import { LokiPageDataService } from 'iwe7/render/src/loki-page-data';
@Injectable({
  providedIn: 'root'
})
export class RulerInstallService {
  constructor(public data: LokiPageDataService) {}

  createOrUpdate() {
    let item = {
      selector: 'ruler',
      code: 'ruler',
      title: '屏幕标尺',
      inputs: {},
      outputs: {}
    };
    this.data.insertOrUpdate(data => {
      return data.code === item.code;
    }, item);
  }
}
