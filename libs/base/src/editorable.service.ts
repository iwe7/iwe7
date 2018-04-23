import { Injectable, Inject } from '@angular/core';
import { fromEvent, Observable, Subject } from 'rxjs';
import {
  map,
  tap,
  switchMap,
  takeUntil,
  takeLast,
  debounceTime,
  filter
} from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
let elementMap: Map<string, Element> = new Map();
import * as Transform from 'css3transform';

@Injectable({
  providedIn: 'root'
})
export class EditorableService {
  // 是否开启可编辑选项
  open: boolean = true;
  // 选中后回调
  select$: Observable<any>;
  // 已选中内容
  selected: any = [];
  // 快捷菜单回调
  quick$: Observable<any>;
  // 选择元素
  ele: Element;
  // 复制的元素
  copyElement: any;
  // 当前激活的元素
  activeElement: any;
  constructor(@Inject(DOCUMENT) private doc: HTMLDocument) {
    this.createSelectDiv();
    this.ctrlQuick();
  }

  saveElement(id, item) {
    elementMap.set(id, item);
  }

  getElement(id) {
    return elementMap.get(id);
  }

  setSelectElement(ele?: Element) {
    this.ele = ele;
  }
  // 创建选择框
  createSelectDiv(ele?: Element) {
    this.ele = ele;
    if (!this.select$) {
      let start = {
        x: 0,
        y: 0
      };
      this.select$ = fromEvent(this.doc, 'mousedown').pipe(
        map((res: MouseEvent) => {
          this.selected = [];
          return {
            x: res.clientX,
            y: res.clientY
          };
        }),
        tap(res => {
          start = res;
        }),
        map(res => {
          let selectDiv = this.doc.getElementById('select-div');
          if (selectDiv) {
            selectDiv.style.display = 'none';
            return selectDiv;
          } else {
            selectDiv = this.doc.createElement('div');
            selectDiv.style.cssText = `position:absolute;width:0px;height:0px;font-size:0px;margin:0px;padding:0px;border:1px dashed #0099FF;background-color:#C3D5ED;z-index:1000;filter:alpha(opacity:60);opacity:0.6;display:none;`;
            selectDiv.id = 'select-div';
            this.doc.body.appendChild(selectDiv);
            selectDiv.style.left = res.x + 'px';
            selectDiv.style.top = res.y + 'px';
            return selectDiv;
          }
        }),
        switchMap(div => {
          return fromEvent(this.doc, 'mousemove').pipe(
            map((res: MouseEvent) => {
              return {
                x: res.clientX,
                y: res.clientY
              };
            }),
            map(res => {
              div.style.left = Math.min(res.x, start.x) + 'px';
              div.style.top = Math.min(res.y, start.y) + 'px';
              div.style.width = Math.abs(res.x - start.x) + 'px';
              div.style.height = Math.abs(res.y - start.y) + 'px';
              div.style.display = 'block';
              return div;
            }),
            takeUntil(fromEvent(this.doc, 'mouseup'))
          );
        }),
        map(res => {
          return {
            left: res.offsetLeft,
            top: res.offsetTop,
            width: res.offsetWidth,
            height: res.offsetHeight
          };
        }),
        // app-root
        map(res => {
          let children = this.ele.children;
          let selected = [];
          for (let i = 0; i < children.length; i++) {
            let child: any = children[i];
            Transform(child);
            let width = child.offsetWidth * child.scaleX;
            let height = child.offsetHeight * child.scaleX;
            let left = child.offsetLeft + child.translateX;
            let top = child.offsetTop + child.translateY;
            let sl = width + left;
            let st = height + top;
            if (
              sl > res.left &&
              left < res.left + res.width &&
              top < res.top + res.height
            ) {
              selected.push(child.id);
            }
          }
          return selected;
        }),
        debounceTime(200)
      );
    }
  }
  // ctrl+s保存
  ctrlQuick() {
    this.quick$ = fromEvent(document, 'keydown').pipe(
      filter((res: any) => {
        let result = res.ctrlKey || res.altKey || res.metaKey || res.shiftKey;
        return (
          result &&
          [65, 67, 68, 69, 70, 73, 79, 83, 86, 88, 89, 90].indexOf(
            res.keyCode
          ) > -1
        );
      }),
      tap((res: any) => {
        res.stopPropagation();
        res.preventDefault();
      }),
      map((res: any) => {
        return {
          keyCode: res.keyCode,
          ctrlKey: res.ctrlKey,
          composed: res.composed,
          altKey: res.altKey,
          metaKey: res.metaKey,
          shiftKey: res.shiftKey
        };
      }),
      tap(res => {
        if (res.keyCode === 65) {
          console.log('全选数据');
        }
        if (res.keyCode === 67) {
          console.log('复制选择');
        }
        if (res.keyCode === 68) {
          console.log('删除数据');
        }
        if (res.keyCode === 69) {
          console.log('打开元素列表');
        }
        if (res.keyCode === 70) {
          console.log('查找数据');
        }
        if (res.keyCode === 73) {
          console.log('代码工具');
        }
        if (res.keyCode === 79) {
          console.log('打开数据');
        }
        if (res.keyCode === 83) {
          // 保存数据 *+s
          console.log('保存数据');
        }
        if (res.keyCode === 86) {
          // 保存数据 *+s
          console.log('粘贴数据');
        }
        if (res.keyCode === 88) {
          // 保存数据 *+s
          console.log('剪切数据');
        }
        if (res.keyCode === 89) {
          // 保存数据 *+s
          console.log('前进一步');
        }
        if (res.keyCode === 90) {
          // 保存数据 *+s
          console.log('退后一步');
        }
      })
    );
  }
  getSelected() {
    return this.selected;
  }
  getSelectedElement() {
    let result = [];
    for (let i in this.selected) {
      let element: any = elementMap.get(this.selected[i]);
      if (element && element.getElement) {
        result.push(element.getElement());
      }
    }
    console.log(result);
  }
}
