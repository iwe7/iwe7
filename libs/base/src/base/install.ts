import { MeepoRenderManager, RenderOptions } from 'iwe7/render';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseInstallService {
  constructor(private render: MeepoRenderManager) {
    this.initBaseControl();
    this.initBaseText();
    this.initBaseView();
    this.initContextMenu();
    this.initBaseList();
    console.log('BaseInstallService');
  }

  initBaseList() {
    let baseControl: RenderOptions = {
      selector: 'base-list',
      inputs: {},
      outputs: {},
      outlet: '',
      fid: 0,
      title: '基础列表'
    };
    this.render.add(baseControl);
  }

  initBaseControl() {
    let baseControl: RenderOptions = {
      selector: 'base-control',
      inputs: {},
      outputs: {},
      outlet: '',
      fid: 0,
      title: '控制'
    };
    this.render.add(baseControl);
  }
  initBaseView() {
    let baseView: RenderOptions = {
      selector: 'base-view',
      inputs: {},
      outputs: {},
      outlet: '',
      fid: 0,
      title: '基础视图'
    };
    this.render.add(baseView);
  }
  initBaseText() {
    let baseText: RenderOptions = {
      selector: 'base-text',
      inputs: {},
      outputs: {},
      outlet: '',
      fid: 0,
      title: '基础文本'
    };
    this.render.add(baseText);
  }
  initContextMenu() {
    let baseContextMenu: RenderOptions = {
      selector: 'base-context-menu',
      inputs: {},
      outputs: {},
      outlet: '',
      fid: 0,
      title: '右键菜单'
    };
    this.render.add(baseContextMenu);
  }
}
