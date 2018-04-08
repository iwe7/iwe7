import { Injectable, ElementRef } from '@angular/core';
import { debounceTime, map } from 'rxjs/operators';
import { Subject, Subscription, Observable, merge, fromEvent } from 'rxjs';
import { IcssService } from 'iwe7/icss';
@Injectable()
export class TouchService {
  touchStart: Subject<any> = new Subject();
  touchEnd: Subject<any> = new Subject();
  touchMove: Subject<any> = new Subject();

  pressMove: Subject<any> = new Subject();

  preV = { x: null, y: null };
  preTapPosition = { x: null, y: null };
  x1: any;
  y1: any;

  pinchStartLen = null;
  zoom = 1;
  isDoubleTap = false;
  _preventTap: boolean = true;

  now: number;
  last: number;
  delta: number;

  singleTapTimeout: any;
  tapTimeout: any;
  longTapTimeout: any;
  swipeTimeout: any;

  constructor(public icss: IcssService) {}

  handler(ele: ElementRef) {
    const move = this.handlerMove(ele).pipe(
      map(res => {
        const rect = this.rect(ele.nativeElement);
        return {
          x: res.movementX,
          y: 0
        };
      })
    );
    this.icss.init({ mouse: move }, ele);
  }

  handlerScroll(ele: ElementRef) {
    return fromEvent(ele.nativeElement, 'scroll');
  }
  // 不考虑多点触控
  handlerStart(
    ele: ElementRef
  ): Observable<{ x: number; y: number; type: string }> {
    const touchstart: Observable<{
      x: number;
      y: number;
      type: string;
    }> = fromEvent(ele.nativeElement, 'touchstart').pipe(
      map((res: TouchEvent) => {
        const len = res.touches.length;
        return {
          x: res.touches[0].pageX,
          y: res.touches[0].pageY,
          type: res.type
        };
      })
    );
    const mousedown: Observable<{
      x: number;
      y: number;
      type: string;
    }> = fromEvent(ele.nativeElement, 'mousedown').pipe(
      map((res: MouseEvent) => {
        return {
          x: res.pageX,
          y: res.pageY,
          type: res.type
        };
      })
    );
    return merge(touchstart, mousedown);
  }

  handlerMove(ele: ElementRef): Observable<any> {
    const touchmove = fromEvent(ele.nativeElement, 'touchmove').pipe(
      map((res: TouchEvent) => {
        const len = res.touches.length;
        return {
          x: res.touches[0].pageX,
          y: res.touches[0].pageY,
          type: res.type
        };
      })
    );
    const mousemove = fromEvent(ele.nativeElement, 'mousemove').pipe(
      map((res: MouseEvent) => {
        return {
          clientX: res.clientX,
          clientY: res.clientY,
          movementX: res.movementX,
          movementY: res.movementY,
          offsetX: res.offsetX,
          offsetY: res.offsetY,
          pageX: res.pageX,
          pageY: res.pageY,
          screenX: res.screenX,
          screenY: res.screenY,
          type: res.type
        };
      })
    );
    return merge(touchmove, mousemove);
  }

  handlerEnd(ele: ElementRef): Observable<any> {
    const touchend = fromEvent(ele.nativeElement, 'touchend');
    const touchcancel = fromEvent(ele.nativeElement, 'touchcancel');
    const mouseup = fromEvent(ele.nativeElement, 'mouseup');
    const mouseout = fromEvent(ele.nativeElement, 'mouseout');
    return merge(touchend, mouseup, touchcancel, mouseout);
  }

  rect(node: Element) {
    if (node instanceof Element) {
      const nodeRect = node.getBoundingClientRect();
      return {
        top: nodeRect.top,
        bottom: nodeRect.bottom,
        left: nodeRect.left,
        right: nodeRect.right,
        height: nodeRect.height,
        width: nodeRect.width
      };
    } else {
      throw new Error(node + ' is not an element.');
    }
  }
}
