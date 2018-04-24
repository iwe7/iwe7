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
import { MeepoRender, MeepoRenderManager, RenderOptions } from 'iwe7/render';
import { DOCUMENT } from '@angular/common';
import * as Transform from 'css3transform';
let activeView: Element;
import { BaseInstallService } from './base/install';
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
  }

  // 初始化组件
  ngOnInit() {
    this._dom = this._ele.nativeElement;
    Transform(this._dom);
    if (this._editable.open) {
      // 保存实例
      this._editable.saveElement(this.id, this);
      // 设置缩放
      if (this.canScale) {
        this._setScale();
      }
      // 设置右键菜单
      this._contextmenu();
    }
    this._setStyles();
    this._setClasses();
    this._bindClick();
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
    //
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
                  title: '新建',
                  cmd: 'element.new'
                },
                {
                  title: '所有元素',
                  cmd: 'element.list'
                },
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
                  title: '另存为',
                  cmd: 'save.other'
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
            outputs: {
              click$: 'click'
            }
          };
          this._mrender
            .addTmp(opt, this.view)
            .pipe(
              // tap
              map((res: any) => res.data.cmd),
              tap(res => {
                this._mrender.remove(opt.selector);
              }),
              // 插入
              tap((res: any) => {
                if (res === 'insert') {
                  this.insertView();
                }
              }),
              // 新建
              tap((res: any) => {
                if (res === 'new') {
                  this.addView();
                }
              }),
              tap((res: any) => {
                if (res === 'element.list') {
                  this.showElementList();
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
    return this._mrender.addTmp(opts, this.view).pipe(
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
          // 设置激活
          // console.log('click');
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
