import {
  NgModule,
  Component,
  ChangeDetectorRef,
  ElementRef,
  Renderer2,
  HostBinding,
  OnInit
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

@Component({
  selector: 'design-drag-impl',
  templateUrl: './design-drag-impl.html',
  styleUrls: ['./design-drag-impl.scss']
})
export class DesignDragImpl extends DesignBase<any> implements OnInit {
  csspre: string;
  constructor(
    cd: ChangeDetectorRef,
    ele: ElementRef,
    icss: IcssService,
    render: Renderer2,
    loader: LazyLoaderService
  ) {
    super(cd, ele, icss, render, loader);
    this.csspre = this.icss.vendorPrefix();
  }

  ngOnInit() {
    const mouseover = fromEvent(this.ele.nativeElement, 'mouseover');
    const mousemove = fromEvent(document, 'mousemove');
    const mousedown = fromEvent(this.ele.nativeElement, 'mousedown');
    const mouseup = fromEvent(document, 'mouseup');
    // 去鼠标按下和鼠标抬起中间的mousemove流
    // 记录起始位置
    let startPoint = {
      x: 0,
      y: 0
    };
    mousedown
      .pipe(
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
          this.render.setStyle(
            this.ele.nativeElement,
            `${this.csspre}Transform`,
            `translate3d(${res.x - startPoint.x}px,${res.y -
              startPoint.y}px,0px)`
          );
        })
      )
      .subscribe();
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [DesignDragImpl],
  entryComponents: [DesignDragImpl]
})
export class DesignDragImplModule extends LazyComponentModuleBase {
  getComponentByName(key: string) {
    return DesignDragImpl;
  }
}
