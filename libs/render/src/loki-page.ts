import * as lokijs from 'lokijs';
import { Collection } from 'lokijs';
import { Injectable } from '@angular/core';
import { LokiModel } from './loki';
import { LokiPageDataService } from './loki-page-data';
@Injectable({
  providedIn: 'root'
})
export class LokiPageService extends LokiModel {
  // 当前显示的page
  page: any;
  constructor(public data: LokiPageDataService) {
    super('meepo.page');
  }

  addEmptyPage() {
    let page = {
      // 名称
      title: '空白页面',
      share: {
        title: '空白页面',
        desc: '空白页面',
        icon: '',
        link: ''
      },
      // 唯一标识
      code: 'blank' + new Date().getTime(),
      // 是否默认
      isDefault: false
    };
    this.page = this.add(item => {
      item.code === page.code;
    }, page);
    // 添加一个base-view
  }

  getPageByCode(code) {
    this.page = this.getData(item => {
      return item.code + '' === code + '';
    });
    return this.page;
  }

  getPageById(id) {
    this.page = this.getData(item => {
      return item.$loki + '' === id + '';
    });
    return this.page;
  }

  getPage(id, isId: boolean = true) {
    if (isId) {
      this.page = this.getPageById(id);
    } else {
      this.page = this.getPageByCode(id);
    }
    if (this.page) {
      let elements = this.getElements(this.page.$loki);
      if (elements.length > 0) {
        this.page.elements = elements;
        return this.page;
      } else {
        elements = [this.addBlankElment(this.page.$loki)];
        this.page.elements = elements;
        return this.page;
      }
    }
  }

  addBlankElment(id) {
    let element = {
      selector: 'base-page',
      inputs: {},
      outputs: {},
      fid: 0,
      code: 'base-page-' + id,
      pageId: id
    };
    return this.data.add(item => {
      return item.code === element.code;
    }, element);
  }

  getElements(pid = 0) {
    let elements = this.data
      .pipe()
      .where(res => {
        return res.$loki === pid;
      })
      .data();
    return elements;
  }
}
