import { Subject, from, fromEvent } from 'rxjs';
import {
  map,
  tap,
  switchMap,
  takeUntil,
  takeWhile,
  filter
} from 'rxjs/operators';
import { EditorableService } from './editorable.service';
import { toBoolean } from 'iwe7/antd/core';
import {
  OnInit,
  ElementRef,
  Injector,
  Renderer2,
  OnDestroy,
  ViewContainerRef,
  Input,
  Output,
  EventEmitter,
  HostListener,
  HostBinding,
  ViewChild
} from '@angular/core';
import { NzMessageService } from 'iwe7/antd/message';
import { MeepoRender } from 'meepo-render';
import { DOCUMENT } from '@angular/common';
import * as Transform from 'css3transform';

let activeView: Element;
import { Store, select } from '@ngrx/store';
import * as appAction from 'iwe7/ngrx/src/modules/app/app.actions';
export abstract class Element implements OnInit, OnDestroy {
  json: any;
  // 样式
  @Input()
  styles: { [key: string]: string } = {
    display: 'inline-block',
    ['transform-origin']: '0% 0% 0px'
  };
  // 样式类
  @Input() classes: { [key: string]: boolean };
  // 是否可缩放
  @Input() canScale: boolean = true;

  // 点击事件
  @Output() click$: Subject<any> = new Subject();
  // 改变
  @Output() update$: Subject<any> = new Subject();

  // 拖动
  @Output() dragmove$: Subject<any> = new Subject();
  // 缩放回调
  @Output() scale$: Subject<any> = new Subject();
  // 添加内容回调
  @Output() addChild$: Subject<any> = new Subject();
  // 默认内容区域
  @ViewChild('content', {
    read: ViewContainerRef
  })
  content: ViewContainerRef;

  // dom
  _ele: ElementRef;
  _dom: HTMLElement;
  // dom器
  _render: Renderer2;
  // 注入器
  _injector: Injector;
  // 渲染器
  _mrender: MeepoRender;

  _message: NzMessageService;

  _doc: Document;

  _editable: EditorableService;

  _startSize: any;
  _store: any;
  @HostBinding('attr.id') _id: string;
  // 构造函数
  constructor(public view: ViewContainerRef) {
    this._injector = this.view.injector;
    this._ele = this._injector.get(ElementRef, null);
    this._render = this._injector.get(Renderer2, null);
    this._mrender = this._injector.get(MeepoRender, null);
    this._message = this._injector.get(NzMessageService, null);
    this._doc = this._injector.get(DOCUMENT, null);
    this._editable = this._injector.get(EditorableService, null);
    this._store = this._injector.get(Store, null);
  }

  // 初始化组件
  ngOnInit() {
    this._dom = this._ele.nativeElement;
    Transform(this._dom);
    if (this._editable.open) {
      // 实例标识
      this._id = this._uid();
      // 保存实例
      this._editable.saveElement(this._id, this);
      // 设置缩放
      if (this.canScale) {
        this._setScale();
      }
      // 设置右键菜单
      this._contextmenu();
    }
    this._setStyles();
    this._setClasses();
  }
  getElement() {
    return this.json;
  }
  // 注销组件
  ngOnDestroy() {
    // events
    this.click$.complete();
    // dragmove
    this.dragmove$.complete();
  }
  // 更新样式
  _updateStyles(obj) {
    this._store.dispatch(new appAction.SetAppStyleAction(obj));
  }
  // 设置样式
  _setStyles() {
    this.styles = this.styles || {};
    for (let key in this.styles) {
      if (this.styles[key]) {
        this._render.setStyle(this._ele.nativeElement, key, this.styles[key]);
      } else {
        this._render.removeStyle(this._ele.nativeElement, key);
      }
    }
  }
  // 设置类名
  _setClasses() {
    this.classes = this.classes || {};
    for (let key in this.classes) {
      if (this.classes[key]) {
        this._render.addClass(this._ele.nativeElement, key);
      } else {
        this._render.removeClass(this._ele.nativeElement, key);
      }
    }
  }
  // 唯一标识
  _uid() {
    let reg = new RegExp(/[xy]/g);
    return 'meepo-xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(reg, c => {
      let r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
  // 右键菜单
  _contextmenu() {
    fromEvent(this._ele.nativeElement, 'contextmenu')
      .pipe(
        tap((res: MouseEvent) => {
          res.stopPropagation();
          res.preventDefault();
        }),
        map(res => {
          return {
            x: res.pageX,
            y: res.pageY
          };
        }),
        tap((res: MouseEvent) => {
          let opt: any = {
            selector: 'base-context-menu',
            inputs: {
              left: res.x,
              top: res.y,
              list: [
                {
                  title: '复制',
                  cmd: 'copy'
                },
                {
                  title: '粘贴',
                  cmd: 'paste'
                },
                {
                  title: '剪切',
                  cmd: 'cut'
                },
                {
                  title: '插入',
                  cmd: 'insert'
                },
                {
                  title: '选择上级',
                  cmd: 'select.father'
                },
                {
                  title: '取消',
                  cmd: 'cancel'
                }
              ]
            },
            outputs: ['click$'],
            children: {}
          };
          this._mrender
            .compiler(opt, this.view)
            .pipe(
              // tap
              map((res: any) => res.data.cmd),
              tap(res => this.view.clear()),
              // 插入
              tap((res: any) => {
                if (res === 'insert') {
                  this.insertView();
                }
              }),
              // 选择上级
              tap(res => {
                if (res === 'select.father') {
                  let id = this._ele.nativeElement.parentElement.id;
                  if (!id) {
                    this._message.error('没有上级');
                  } else {
                    let element: any = this._editable.getElement(id);
                    if (element) {
                      element._doScale(element._ele.nativeElement).subscribe();
                    } else {
                      this._message.error('没有找到上级');
                    }
                  }
                }
              }),
              // 复制
              tap(res => {
                if (res === 'copy') {
                  this._editable.copyElement = this.json;
                  this._message.success('复制成功');
                }
              }),
              // 粘贴
              tap(res => {
                if (res === 'paste') {
                  if (!this._editable.copyElement) {
                    this._message.error('没有找到相关内容');
                  } else {
                    this._mrender
                      .compiler(this._editable.copyElement, this.content)
                      .pipe(
                        tap((res: any) => {
                          if (res.type === 'update$') {
                            this.update$.next();
                          }
                        })
                      )
                      .subscribe();
                  }
                }
              })
            )
            .subscribe();
        })
      )
      .subscribe();
  }

  insertView(viewData?: any) {
    // 插入
    viewData = viewData || {
      selector: 'base-view',
      inputs: {
        styles: {
          width: '100px',
          height: '100px'
        }
      },
      outputs: ['change$', 'update$'],
      children: {
        content: []
      }
    };
    let { children } = this.json;
    let { content } = children;
    if (content) {
      if (!Array.isArray(content)) {
        content = [content];
      }
      content.push(viewData);
    }
    children = {
      ...children,
      ...{
        content: content
      }
    };
    this.json = {
      ...this.json,
      children: children
    };
    this._mrender
      .compiler(
        this.json.children.content[this.json.children.content.length - 1],
        this.content
      )
      .pipe(
        tap((res: any) => {
          if (res.type === 'update$') {
            this.update$.next();
          }
        })
      )
      .subscribe();
    this.update$.next();
  }

  // 缩放
  _setScale() {
    // 设置样式
    let ele: any = this._dom;
    fromEvent(ele, 'dblclick')
      .pipe(
        tap((res: any) => {
          if (activeView) {
            activeView._clearView();
          }
          activeView = this;
          this._startSize = {
            width: ele.clientWidth,
            height: ele.clientHeight,
            left: ele.offsetLeft,
            top: ele.offsetTop,
            translateX: ele.translateX,
            translateY: ele.translateY,
            scaleX: ele.scaleX,
            scaleY: ele.scaleY
          };
          this.view.clear();
        }),
        tap((res: MouseEvent) => {
          res.stopPropagation();
          res.preventDefault();
        }),
        switchMap(res => {
          return this._doScale(ele);
        })
      )
      .subscribe();
  }

  _doScale(ele) {
    let size = {
      // 控制器尺寸
      width: ele.clientWidth * ele.scaleX,
      height: ele.clientHeight * ele.scaleY,
      left: ele.offsetLeft + ele.translateX,
      top: ele.offsetTop + ele.translateY,
      translateX: ele.translateX,
      translateY: ele.translateY,
      scaleX: ele.scaleX,
      scaleY: ele.scaleY
    };
    let opts: any = {
      selector: 'base-control',
      inputs: size,
      outputs: ['change$']
    };
    return this._mrender.compiler(opts, this.view).pipe(
      map((res: any) => res.data),
      map(res => {
        if (res === 'clear') {
          this.view.clear();
        } else {
          ele.translateX = res.left - ele.offsetLeft;
          ele.translateY = res.top - ele.offsetTop;
          this._updateStyles({
            width: res.width + 'px',
            height: res.height + 'px'
          });
        }
        return res;
      }),
      tap(res => this.scale$.next(res))
    );
  }

  _bindClick() {
    fromEvent(this._ele.nativeElement, 'click')
      .pipe(
        // tap
        tap(res => {
          this._editable.activeElement = this;
        })
      )
      .subscribe();
  }
  // 清理视图
  _clearView() {
    this.view.clear();
  }
  // 随机颜色
  _randomColor() {
    let r = Math.floor(this._randomNumber(100, 256));
    let g = Math.floor(this._randomNumber(100, 256));
    let b = Math.floor(this._randomNumber(100, 256));
    return `rgb(${r},${g},${b})`;
  }
  // 随机数
  _randomNumber(Min, Max) {
    let Range = Max - Min;
    let Rand = Math.random();
    let num = Min + Math.round(Rand * Range); //四舍五入
    return num;
  }
}

export abstract class ElementDesign {}
