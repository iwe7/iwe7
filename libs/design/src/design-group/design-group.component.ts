import {
  Component,
  OnInit,
  Input,
  ViewContainerRef,
  AfterViewInit,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  Injector
} from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';
import {
  skipUntil,
  tap,
  map,
  takeUntil,
  mergeMap,
  switchMap,
  debounceTime
} from 'rxjs/operators';

import { LazyLoaderService } from 'iwe7/lazy-load';
import { Iwe7DesignBase, Iwe7DesignSettingBase } from '../iwe7-design';
import { IcssService } from 'iwe7/icss';
import { ZIndexService } from 'iwe7/themes/src/z-index.service';
import { CacheMemoryService } from 'iwe7/cache/src/chache-memory.service';
@Component({
  selector: '[design-group]',
  templateUrl: './design-group.component.html',
  styleUrls: ['./design-group.component.scss']
})
export class DesignGroupComponent extends Iwe7DesignBase<any>
  implements OnInit, AfterViewInit {
  @Input() props: BehaviorSubject<any> = new BehaviorSubject({});
  // 实例
  settingInstance: Iwe7DesignSettingBase<any>;
  viewInstance: Iwe7DesignBase<any>;
  groupInstance: Iwe7DesignBase<any>;

  // 插座
  settingRef: ViewContainerRef;
  viewRef: ViewContainerRef;
  groupRef: ViewContainerRef;

  // dom
  @ViewChild('view') viewEle: ElementRef;
  @ViewChild('setting') settingEle: ElementRef;
  @ViewChild('group') gropuEle: ElementRef;

  // 是否装载
  installedSetting: boolean = false;
  installedView: boolean = false;
  installedGroup: boolean = false;

  _settingStyle: any = {
    display: 'none',
    zIndex: this.zindex.getIndex()
  };
  settingStyle: BehaviorSubject<any> = new BehaviorSubject(this._settingStyle);

  // selector
  view: string;
  setting: string;

  constructor(
    public lazyLoad: LazyLoaderService,
    public icss: IcssService,
    public ele: ElementRef,
    cd: Injector,
    public zindex: ZIndexService,
    public memory: CacheMemoryService<any>
  ) {
    super(cd);
  }

  ngOnInit() {
    let documentClick = fromEvent(document, 'click');
    // viewRef鼠标事件
    let viewEvent = this.getMouseEvent(this.viewEle.nativeElement);
    let settingEvent = this.getMouseEvent(this.settingEle.nativeElement);

    settingEvent.click.subscribe((res: Event) => {
      res.preventDefault();
      res.stopPropagation();
      this._settingStyle.zIndex = this.zindex.getIndex();
      this.settingStyle.next(this._settingStyle);
    });
    // 当用户dblclick>view时 展示setting
    this.settingStyle.subscribe(res => {
      this._settingStyle = res;
    });
    viewEvent.dblclick
      .pipe(
        // 单击或者单机document结束
        tap((res: MouseEvent) => {
          res.stopPropagation();
          res.preventDefault();
        }),
        map((res: MouseEvent) => ({ x: res.pageX, y: res.pageY })),
        // 展示setting
        tap(res => {
          this._settingStyle = {
            display: 'block',
            left: res.x,
            top: res.y,
            zIndex: this.zindex.getIndex()
          };
          this.setSettingStyle(this._settingStyle);
        })
      )
      .subscribe();
    this.icss.init(
      {
        setting: this.settingStyle
      },
      this.ele
    );
  }

  private setSettingStyle(obj: any) {
    this.settingStyle.next(obj);
  }

  private getMouseEvent(ele: Element) {
    return {
      click: fromEvent(ele, 'click'),
      dblclick: fromEvent(ele, 'dblclick'),
      drag: fromEvent(ele, 'drag'),
      dragend: fromEvent(ele, 'dragend'),
      dragenter: fromEvent(ele, 'dragenter'),
      dragleave: fromEvent(ele, 'dragleave'),
      dragover: fromEvent(ele, 'dragover'),
      dragstart: fromEvent(ele, 'dragstart'),
      drop: fromEvent(ele, 'drop'),
      mousedown: fromEvent(ele, 'mousedown'),
      mousemove: fromEvent(ele, 'mousemove'),
      mouseout: fromEvent(ele, 'mouseout'),
      mouseover: fromEvent(ele, 'mouseover'),
      mouseup: fromEvent(ele, 'mouseup'),
      mousewheel: fromEvent(ele, 'mousewheel'),
      scroll: fromEvent(ele, 'scroll')
    };
  }

  ngAfterViewInit() {
    let re = this.props.subscribe(res => {
      if (!res) {
        return;
      }
      this.memory.set(res._uid, this);
      let { setting, view, group } = res;
      if (!setting && view) {
        setting = 'design-setting-default';
      }
      if (group && !this.groupInstance) {
        if (this.groupRef) {
          this.lazyLoad
            .createComponent(
              {
                selector: 'design-group',
                element: null
              },
              this.groupRef,
              this
            )
            .subscribe((instance: Iwe7DesignSettingBase<any>) => {
              instance.setProps(group);
              this.groupInstance = instance;
              this.installedGroup = true;
            });
        }
      }
      if (setting && !this.settingInstance) {
        if (this.settingRef) {
          this.lazyLoad
            .createComponent(
              {
                selector: setting,
                element: null
              },
              this.settingRef,
              this
            )
            .subscribe((instance: Iwe7DesignSettingBase<any>) => {
              // 设置组件实例
              if (instance) {
                instance.setProps(this.props);
                this.settingInstance = instance;
                this.installedSetting = true;
                this.setting = setting;
                this.settingInstance.formChange
                  .pipe(debounceTime(200))
                  .subscribe(res => {
                    // 广播表单值变化
                    this.props.next(res);
                  });
              }
            });
        }
      }
      // 如果view发生变化
      if ((view || this.view !== view) && !this.viewInstance) {
        if (this.viewRef) {
          if (this.viewInstance) {
            this.viewRef.clear();
          }
          this.lazyLoad
            .createComponent(
              {
                selector: view,
                element: null
              },
              this.viewRef,
              this
            )
            .subscribe((instance: Iwe7DesignBase<any>) => {
              // 展示组件实例
              if (instance) {
                this.installedView = true;
                instance.setProps(this.props);
                this.viewInstance = instance;
                this.view = view;
              }
            });
        }
      }
    });
  }

  setSettingRef(view: ViewContainerRef) {
    this.settingRef = view;
  }
  setViewRef(view: ViewContainerRef) {
    this.viewRef = view;
  }

  setGroupRef(view: ViewContainerRef) {
    this.groupRef = view;
  }

  onPropsChange(res: any) {}

  setTop() {
    this._settingStyle.zIndex = this.zindex.getIndex();
    this.settingStyle.next(this._settingStyle);
  }

  close() {
    this._settingStyle.display = 'none';
    this.settingStyle.next(this._settingStyle);
  }
}
