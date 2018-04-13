import {
  NgModule,
  Component,
  ChangeDetectorRef,
  ElementRef,
  Renderer2,
  OnInit,
  Output,
  EventEmitter,
  Injector
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyComponentModuleBase } from 'iwe7/lazy-load';
import { DesignBase } from '../design-base/design-base';

import { IcssService } from 'iwe7/icss';
import { LazyLoaderService } from 'iwe7/lazy-load';

import { BehaviorSubject, fromEvent } from 'rxjs';
import {
  map,
  tap,
  takeUntil,
  skipUntil,
  switchMap,
  mergeMap,
  concatMap,
  filter,
  debounceTime,
  takeWhile
} from 'rxjs/operators';
import { DesignDragDataService } from '../design-drag-data.service';
import { Iwe7CoreModule } from 'iwe7/core';
import { ChacheMemoryService } from 'iwe7/cache';

@Component({
  selector: 'design-drop-impl',
  templateUrl: './design-drop-impl.html',
  styleUrls: ['./design-drop-impl.scss']
})
export class DesignDropImpl extends DesignBase<any> implements OnInit {
  @Output() drop: EventEmitter<any> = new EventEmitter();
  constructor(
    cd: ChangeDetectorRef,
    injector: Injector,
    public dragData: DesignDragDataService
  ) {
    super(injector);
  }

  ngOnInit() {
    const mousemove = fromEvent(document, 'mousemove');
    const mousedown = fromEvent(document, 'mousedown');
    const mouseup = fromEvent(document, 'mouseup');

    let {
      offsetTop,
      offsetLeft,
      clientWidth,
      clientHeight
    } = this.ele.nativeElement;
    let rect = {
      start: {
        x: offsetLeft,
        y: offsetTop
      },
      end: {
        x: offsetLeft + clientWidth,
        y: offsetTop + clientHeight
      }
    };
    // 鼠标抬起表示放置
    mouseup
      .pipe(
        tap(res => {
          // 鼠标抬起发送是否放置标识
          this.drop.emit(this.isOver);
        })
      )
      .subscribe();
    mousedown
      .pipe(
        // 调试
        switchMap(res => {
          return mousemove.pipe(
            // 当鼠标释放时
            map((res: MouseEvent) => {
              return {
                x: res.pageX,
                y: res.pageY
              };
            }),
            map(res => {
              return (
                res.x > rect.start.x &&
                res.x < rect.end.x &&
                (res.y > rect.start.y && res.y < rect.end.y)
              );
            }),
            takeUntil(mouseup.pipe()),
            tap(res => {
              this.checkMouseOver(res);
            })
            // 当鼠标抬起时 说明放置
          );
        })
      )
      .subscribe();
  }
  isOver: boolean = false;
  checkMouseOver(isOver: boolean) {
    this.isOver = isOver;
    if (isOver) {
      this.style$.next({
        [`box-shadow`]: '1px 2px 4px #313131'
      });
    } else {
      this.resetPosition();
    }
  }

  resetPosition() {
    this.style$.next({
      [`box-shadow`]: 'none'
    });
  }
}

@NgModule({
  imports: [CommonModule, Iwe7CoreModule],
  declarations: [DesignDropImpl],
  entryComponents: [DesignDropImpl]
})
export class DesignDropImplModule extends LazyComponentModuleBase {
  getComponentByName(key: string) {
    return DesignDropImpl;
  }
}
