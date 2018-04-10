import {
  Directive,
  ElementRef,
  HostBinding,
  OnInit,
  Input
} from '@angular/core';
import { fromEvent, merge, animationFrameScheduler, generate } from 'rxjs';
import {
  map,
  tap,
  throttleTime,
  debounceTime,
  takeUntil,
  switchMap
} from 'rxjs/operators';
@Directive({
  selector: '[dragmove]'
})
export class DragmoveDirective implements OnInit {
  @HostBinding('style.left.px') _left: number;
  @HostBinding('style.top.px') _top: number;
  @HostBinding('style.position') _position: string = 'absolute';
  // 如果设置了，那么记录位置，下次来的时候还原上一次操作位置
  _cacheKey: string;
  @Input()
  set dragmove(val: string) {
    if (val) {
      this._cacheKey = val;
      let p = localStorage.getItem(val);
      if (p) {
        let point = JSON.parse(p);
        this._left = point.left;
        this._top = point.top;
      }
    }
  }
  isStart: boolean = false;
  constructor(public ele: ElementRef) {}
  ngOnInit() {
    this.onDrag();
  }
  // ------------------------------
  onDrag() {
    const mousemove = fromEvent(document, 'mousemove');
    const touchmove = fromEvent(document, 'touchmove');
    const touchend = fromEvent(this.ele.nativeElement, 'touchend');
    const mouseup = fromEvent(this.ele.nativeElement, 'mouseup');

    const mousedown = fromEvent(this.ele.nativeElement, 'mousedown');
    const touchstart = fromEvent(this.ele.nativeElement, 'touchstart');

    const nodeRect = this.ele.nativeElement.getBoundingClientRect();
    const rect = {
      height: nodeRect.height,
      width: nodeRect.width
    };
    const move = merge(mousedown, touchstart)
      .pipe(
        switchMap(res =>
          merge(
            mousemove.pipe(
              map((evt: MouseEvent) => {
                return {
                  x: evt.clientX,
                  y: evt.clientY
                };
              }),
              takeUntil(mouseup)
            ),
            touchmove.pipe(
              map((evt: TouchEvent) => {
                return {
                  x: evt.touches[0].pageX,
                  y: evt.touches[0].pageY
                };
              }),
              takeUntil(touchend)
            ),
            animationFrameScheduler
          )
        )
      )
      .pipe(
        map(res => {
          this._top = res.y - rect.height / 2;
          this._left = res.x - rect.width / 2;
          return {
            left: this._left,
            top: this._top
          };
        }),
        debounceTime(300),
        tap(
          res =>
            this._cacheKey &&
            localStorage.setItem(this._cacheKey, JSON.stringify(res))
        )
      );
    move.subscribe((res: any) => {});
  }
}
