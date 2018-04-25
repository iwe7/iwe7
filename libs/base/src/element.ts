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
  ViewChild,
  ChangeDetectorRef
} from '@angular/core';
import { NzMessageService } from 'iwe7/antd/message';
import {
  MeepoRender,
  MeepoRenderManager,
  RenderOptions,
  LokiPageService,
  LokiPageDataService
} from 'iwe7/render';
import { DOCUMENT } from '@angular/common';
import * as Transform from 'css3transform';
let activeView: Element;
import { BaseInstallService } from './base/install';
import { ActionsService } from 'iwe7/base/src/actions';
import { NzModalService } from 'iwe7/antd/modal';
let zindex = 999;
export abstract class Element implements OnInit, OnDestroy {
  json: any;

  @HostBinding('attr.data-title') title: string;
  @HostBinding('attr.data-code') code: string;

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
  @Output() setRoot$: Subject<any> = new Subject();
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
  _mmanger: MeepoRenderManager;
  _message: NzMessageService;
  _doc: Document;
  _editable: EditorableService;
  _startSize: any;
  _store: any;
  _actions: ActionsService;
  _modal: NzModalService;
  _data: LokiPageDataService;
  _cd: ChangeDetectorRef;
  @HostBinding('attr.id') id: string;
  // 构造函数
  constructor(public view: ViewContainerRef) {
    this._injector = this.view.injector;
    this._ele = this._injector.get(ElementRef, null);
    this._render = this._injector.get(Renderer2, null);
    this._mrender = this._injector.get(MeepoRender, null);
    this._message = this._injector.get(NzMessageService, null);
    this._doc = this._injector.get(DOCUMENT, null);
    this._editable = this._injector.get(EditorableService, null);
    let install = this._injector.get(BaseInstallService, null);
    this._mmanger = this._injector.get(MeepoRenderManager, null);
    this._actions = this._injector.get(ActionsService, null);
    this._modal = this._injector.get(NzModalService, null);
    this._data = this._injector.get(LokiPageDataService, null);
    this._cd = this._injector.get(ChangeDetectorRef, null);
  }

  markForCheck() {
    this._setStyles();
    this._setClasses();
    this._cd.markForCheck();
  }

  // 初始化组件
  ngOnInit() {
    this._dom = this._ele.nativeElement;
    Transform(this._dom);
    if (this._editable.open) {
      // 设置缩放
      if (this.canScale) {
        this._setScale();
      }
      // 设置右键菜单
      this._contextmenu();
    }
    this.markForCheck();
    this._bindClick();
  }
  setEditorHeader() {
    this._mrender
      .addTmp(
        {
          selector: 'base-help-header',
          inputs: {
            styles: {
              display: 'flex',
              width: '100%',
              ['flex-direction']: 'row',
              ['align-items']: 'center'
            }
          }
        },
        this.view
      )
      .subscribe();
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
    (obj.translateX = this._ele.nativeElement.translateX),
      (obj.translateY = this._ele.nativeElement.translateY);
    this.styles = {
      ...this.styles,
      ...obj
    };
    let update = {
      $loki: this.id,
      inputs: {
        styles: this.styles
      }
    };
    this._setStyles();
    this._data.findAndUpdate(
      item => {
        return item.$loki === this.id;
      },
      data => {
        return {
          ...data,
          ...update
        };
      }
    );
    this._data.autoSave();
  }
  // 设置样式
  _setStyles() {
    this.styles = this.styles || {};
    for (let key in this.styles) {
      if (key === 'translateX') {
        this._ele.nativeElement.translateX = this.styles[key];
      } else if (key === 'translateY') {
        this._ele.nativeElement.translateY = this.styles[key];
      } else if (this.styles[key]) {
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
                  title: '代码编写',
                  cmd: 'code.mirror',
                  inputs: {
                    eid: this.id
                  }
                },
                {
                  title: '取消关闭',
                  cmd: 'cancel'
                }
              ]
            },
            outputs: {
              click$: 'click'
            }
          };
          this._mrender
            .addTmp(opt, this.view)
            .pipe(
              // tap
              map((res: any) => res.data),
              tap(res => {
                this._mrender.remove(opt.selector);
              }),
              tap(res => {
                if (res.cmd !== 'cancel') {
                  this._mrender
                    .showElement(
                      {
                        title: res.title,
                        code: res.cmd
                      },
                      res.inputs
                    )
                    .subscribe(res => {});
                }
              })
            )
            .subscribe();
        })
      )
      .subscribe();
  }

  addView() {}

  showElementList() {
    let top = this._mmanger.getTop();
    let opt: RenderOptions = {
      selector: 'base-list',
      inputs: {
        list: top
      },
      outputs: {
        click$: 'click'
      },
      outlet: 'content',
      fid: 0
    };
    this._mrender.addTmp(opt, this.content).subscribe((res: any) => {
      this._mrender.remove(opt.selector);
      this.setRoot$.next(res.data);
    });
  }

  insertView() {
    // 插入
    if (!this.id) {
      this._message.error('请先新建一个组件');
      return;
    }
    let viewData = {
      selector: 'base-view',
      inputs: {
        styles: {
          width: '100px',
          height: '100px',
          ['background-color']: 'rgba(0,0,0,.7)'
        }
      },
      outputs: {
        change$: 'change',
        update$: 'update'
      },
      outlet: 'content',
      fid: this.id
    };
    this._mmanger.add(viewData);
    this._mrender.add(viewData).subscribe(res => {
      console.log(res);
    });
    this.update$.next();
  }

  // 缩放
  _setScale() {
    // 设置样式
    let ele: any = this._dom;
    fromEvent(ele, 'dblclick')
      .pipe(
        tap((res: any) => {
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
          this._mrender.remove('base-control');
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
      outputs: {
        change$: 'change'
      }
    };
    return this._mrender.addTmp(opts, this.view).pipe(
      map((res: any) => res.data),
      tap(res => {
        if (res === 'clear') {
          this._mrender.remove(opts.selector);
        }
      }),
      map(res => {
        ele.translateX = res.left - ele.offsetLeft;
        ele.translateY = res.top - ele.offsetTop;
        let clientWidth = this._doc.documentElement.clientWidth;
        let clientHeight = this._doc.documentElement.clientHeight;
        if (res.width && res.height) {
          this._updateStyles({
            width: clientWidth - res.width < 10 ? '100%' : res.width + 'px',
            height: clientHeight - res.height < 10 ? '100%' : res.height + 'px'
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
          // 设置激活
          // console.log('click');
          // this._mrender.remove('base-content-menu');
        })
      )
      .subscribe();
  }
  // 清理视图
  _clearView() {
    this.view.clear();
  }
}

export abstract class ElementDesign {}
