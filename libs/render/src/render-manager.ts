import { Injectable } from '@angular/core';
import { Subject, from } from 'rxjs';
import { tap, map, switchMap } from 'rxjs/operators';
import { RenderOptions } from './interface';
import { RenderElementLokijs } from './loki-element';
let list: any = [];
@Injectable({
  providedIn: 'root'
})
export class MeepoRenderManager {
  renderMap: Map<number, RenderOptions> = new Map();
  id = 0;
  add$: Subject<any> = new Subject();
  remove$: Subject<any> = new Subject();
  update$: Subject<any> = new Subject();
  constructor(public loki: RenderElementLokijs) {}
  // 根据id获取
  get(id: number) {
    return this.loki.get(id);
  }
  // 添加
  add(from: RenderOptions): RenderOptions {
    // 查找重复
    if (from.fid === 0) {
      let lists = this.loki.where(item => {
        return item.fid === 0 && item.selector === from.selector;
      });
      if (lists.length > 0) {
        return;
      }
    }
    let add = this.loki.insert(from);
    this.loki.autoSave();
    return add;
  }
  saveToLocal() {
    this.loki.autoSave();
  }
  // 删除
  remove(id: number) {
    let remove = this.loki.remove(id);
  }
  // 更新
  update(from: RenderOptions) {
    this.loki.findAndUpdate(
      item => {
        return item.$loki === from.$loki;
      },
      (obj: RenderOptions) => {
        return {
          ...obj,
          ...from
        };
      }
    );
    this.loki.autoSave();
  }

  getTop(): any[] {
    let top = this.loki.where(item => {
      return item.fid === 0;
    });
    top = top || [];
    return top;
  }

  getChild(fid: number) {
    let top = this.loki
      .pipe()
      .where(item => {
        return item.fid === fid;
      })
      .simplesort('$loki')
      .data();
    top = top || [];
    return top;
  }

  getAll() {
    let all = this.loki.where(item => {
      return true;
    });
    return all || [];
  }
}
