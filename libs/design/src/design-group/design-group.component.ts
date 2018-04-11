import {
  Component,
  OnInit,
  Input,
  ViewContainerRef,
  AfterViewInit,
  ViewChild,
  ElementRef,
  ChangeDetectorRef
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
@Component({
  selector: 'design-group',
  templateUrl: './design-group.component.html',
  styleUrls: ['./design-group.component.scss']
})
export class DesignGroupComponent extends Iwe7DesignBase<any>
  implements OnInit, AfterViewInit {
  @Input() props: BehaviorSubject<any> = new BehaviorSubject({});
  // 实例
  settingInstance: Iwe7DesignSettingBase<any>;
  viewInstance: Iwe7DesignBase<any>;

  // 插座
  settingRef: ViewContainerRef;
  viewRef: ViewContainerRef;

  // dom
  @ViewChild('view') viewEle: ElementRef;
  @ViewChild('setting') settingEle: ElementRef;

  // 是否装载
  installedSetting: boolean = false;
  installedView: boolean = false;

  settingStyle: BehaviorSubject<any> = new BehaviorSubject({
    display: 'none'
  });

  // selector
  view: string;
  setting: string;

  constructor(
    public lazyLoad: LazyLoaderService,
    public icss: IcssService,
    public ele: ElementRef,
    cd: ChangeDetectorRef
  ) {
    super(cd);
  }

  ngOnInit() {
    let documentClick = fromEvent(document, 'click');
    // viewRef鼠标事件
    let viewEvent = this.getMouseEvent(this.viewEle.nativeElement);
    let settingEvent = this.getMouseEvent(this.settingEle.nativeElement);
    let documentEvent = this.getMouseEvent(document.documentElement);
    // 当用户dblclick>view时 展示setting
    viewEvent.dblclick
      .pipe(
        // 单击或者单机document结束
        tap((res: MouseEvent) => {
          res.stopPropagation();
          res.preventDefault();
        }),
        map((res: MouseEvent) => ({ x: res.pageX, y: res.pageY })),
        // 展示setting
        tap(res =>
          this.setSettingStyle({ display: 'block', left: res.x, top: res.y })
        )
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
    this.props.subscribe(res => {
      let { setting, view } = res;
      if (!setting && view) {
        setting = 'design-setting-default';
      }
      if (setting && !this.settingInstance) {
        if (this.settingRef) {
          this.lazyLoad
            .createComponent(setting, this.settingRef)
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
      if (view && !this.viewInstance) {
        if (this.viewRef) {
          this.lazyLoad
            .createComponent(view, this.viewRef)
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

  onPropsChange(res: any) {}
}
