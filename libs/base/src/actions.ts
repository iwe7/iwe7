export const actions = {
  addElement: 'add element',
  addPage: 'add page',
  addApp: 'add app',
  removeElement: 'remove element'
};

import { Injectable } from '@angular/core';
import { LokiAppService } from 'iwe7/render/src/loki-app';
import { LokiPageService } from 'iwe7/render/src/loki-page';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {
  constructor(public app: LokiAppService, public page: LokiPageService) {}
  // 事件类型 数据
  next({ type, payload }) {
    // console.log(type, payload);
  }

  showApp(code: string) {
    let apps = this.app.where(item => {
      return item.code === code;
    });
    if (apps.length > 0) {
      let app = apps[0];
      let pages = this.page.where(item => {
        return item.appId === app.$loki && item.isDefault;
      });
      return pages[0];
    }
  }
}
