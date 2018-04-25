import { Injectable } from '@angular/core';
import { RenderApp, RenderAppPage } from 'iwe7/render';
import { LokiAppService } from 'iwe7/render/src/loki-app';
import { LokiPageDataService } from 'iwe7/render/src/loki-page-data';
@Injectable({
  providedIn: 'root'
})
export class ElementDesignInstallService {
  constructor(public data: LokiPageDataService) {}

  createOrUpdate() {
    let item = {
      selector: 'element-design',
      code: 'element.design',
      title: '元素设计',
      inputs: {},
      outputs: {}
    };
    this.data.findAndUpdate(
      data => {
        return data.code === item.code;
      },
      data => {
        data.selector = 'element-design';
        return data;
      }
    );
  }
}
