import {
  NgModule,
  Component,
  ChangeDetectorRef,
  ElementRef,
  Renderer2,
  HostBinding,
  OnInit,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyComponentModuleBase } from 'iwe7/lazy-load';
import { DesignBase } from '../design-base/design-base';

import { BehaviorSubject, fromEvent } from 'rxjs';
import {
  map,
  tap,
  takeUntil,
  skipUntil,
  switchMap,
  mergeMap,
  concatMap
} from 'rxjs/operators';

import { IcssService } from 'iwe7/icss';
import { LazyLoaderService } from 'iwe7/lazy-load';
import { DesignDragDataService } from '../design-drag-data.service';
import { Iwe7ColorsService, ZIndexService } from 'iwe7/themes';
@Component({
  selector: 'design-drag-impl',
  templateUrl: './design-drag-impl.html',
  styleUrls: ['./design-drag-impl.scss']
})
export class DesignDragImpl extends DesignBase<any>
  implements OnInit, AfterViewInit {
  csspre: string;

  @ViewChild('dragEle') dragEle: ElementRef;
  _bgcolor: any;
  constructor(
    cd: ChangeDetectorRef,
    ele: ElementRef,
    icss: IcssService,
    render: Renderer2,
    loader: LazyLoaderService,
    public dragData: DesignDragDataService,
    public colors: Iwe7ColorsService,
    public zindex: ZIndexService
  ) {
    super(cd, ele, icss, render, loader);
    this.csspre = this.icss.vendorPrefix();
  }
  ngOnInit() {
    this._bgcolor = this.colors.getRandomColor();
  }
  ngAfterViewInit() {
    const mouseover = fromEvent(this.ele.nativeElement, 'mouseover');
    const mousemove = fromEvent(document, 'mousemove');
    const mousedown = fromEvent(this.ele.nativeElement, 'mousedown');
    const mouseup = fromEvent(document, 'mouseup');

    let {
      offsetTop,
      offsetLeft,
      clientWidth,
      clientHeight
    } = this.ele.nativeElement;
    // 去鼠标按下和鼠标抬起中间的mousemove流
    // 记录起始位置
    let startPoint = {
      x: 0,
      y: 0
    };
    mousedown
      .pipe(
        tap(res => {
          // 设置拖拽数据
          this.dragData.set(this._props.props);
          this.style$.next({
            zindex: this.zindex.getIndex()
          })
        }),
        map((res: MouseEvent) => {
          return {
            x: res.offsetX,
            y: res.offsetY,
            type: res.type
          };
        }),
        tap(res => {
          // 记录当前点击元素位置
          startPoint.x = res.x;
          startPoint.y = res.y;
        }),
        switchMap(res => {
          return mousemove.pipe(
            // 调试mousemove
            map((res: MouseEvent) => {
              return {
                x: res.pageX,
                y: res.pageY,
                type: res.type
              };
            }),
            takeUntil(mouseup)
          );
        }),
        // 移动元素
        tap(res => {
          this.render.removeStyle(
            this.dragEle.nativeElement,
            `${this.csspre}TransitionDuration`
          );
          this.render.setStyle(
            this.dragEle.nativeElement,
            `${this.csspre}Transform`,
            `translate3d(${res.x - startPoint.x - offsetLeft}px,${res.y -
              startPoint.y -
              offsetTop}px,0px)`
          );
          this.style$.next({
            opacity: 0.8
          });
        })
      )
      .subscribe();
  }

  resetPosition() {
    this.render.setStyle(
      this.dragEle.nativeElement,
      `${this.csspre}TransitionDuration`,
      '300ms'
    );
    this.render.setStyle(
      this.dragEle.nativeElement,
      `${this.csspre}Transform`,
      `translate3d(0px,0,0px)`
    );
    this.style$.next({
      opacity: 1
    });
  }
}
import { Iwe7CoreModule } from 'iwe7/core';

@NgModule({
  imports: [CommonModule, Iwe7CoreModule],
  declarations: [DesignDragImpl],
  entryComponents: [DesignDragImpl]
})
export class DesignDragImplModule extends LazyComponentModuleBase {
  getComponentByName(key: string) {
    return DesignDragImpl;
  }
}
