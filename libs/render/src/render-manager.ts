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
    this.loki.serialize();
    return add;
  }

  saveToLocal() {
    this.loki.serialize();
  }
  // 删除
  remove(id: number) {
    let remove = this.loki.remove(id);
  }
  // 更新
  update(from: RenderOptions) {
    this.renderMap.set(from.$loki, from);
  }

  getTop(): any[] {
    let top = this.loki.where(item => {
      return item.fid === 0;
    });
    top = top || [];
    return top;
  }

  getChild(fid: number) {
    let top = this.loki.where(item => {
      return item.fid === fid;
    });
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
