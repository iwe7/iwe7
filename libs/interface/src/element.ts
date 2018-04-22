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

  @Input() canDragMove: boolean = true;

  // 点击事件
  @Output() click$: Subject<any> = new Subject();
  // 拖动
  @Output() dragmove$: Subject<any> = new Subject();

  // 默认内容区域
  @ViewChild('content', {
    read: ViewContainerRef
  })
  content: ViewContainerRef;

  // dom
  _ele: ElementRef;
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
  }

  // 初始化组件
  ngOnInit() {
    if (this._editable.open) {
      // 实例标识
      this._id = this._uid();
      // 保存实例
      this._editable.saveElement(this._id, this);
      // 设置样式
      let ele = this._ele.nativeElement;
      Transform(ele);
      // 设置缩放
      this._setScale();
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
    this.styles = this.styles || {};
    this.styles = {
      ...this.styles,
      ...obj
    };
    this._setStyles();
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
        tap((res: MouseEvent) => {}),
        // tap
        tap(res => console.log(res))
      )
      .subscribe();
  }

  // 缩放
  _setScale() {
    let ele = this._ele.nativeElement;
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
                this._ele.nativeElement.translateX = res.left;
                this._ele.nativeElement.translateY = res.top;
                this._ele.nativeElement.scaleX =
                  res.width / this._startSize.width;
                this._ele.nativeElement.scaleY =
                  res.height / this._startSize.height;
                this.styles['transform'] = this._ele.nativeElement.transform;
              }
              return res;
            })
          );
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
