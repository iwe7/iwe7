import {
  Directive,
  OnInit,
  ElementRef,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, switchMap, takeUntil, debounceTime, tap } from 'rxjs/operators';
@Directive({
  selector: '[swipeMove]'
})
export class SwipeMoveDirective implements OnInit {
  // 移动像素临界值
  @Output() swipeMove: EventEmitter<any> = new EventEmitter();
  len: number = 10;
  constructor(public ele: ElementRef) {}
  ngOnInit() {
    this.handler(this.ele.nativeElement);
  }
  handler(ele: Element) {
    let start = fromEvent(ele, 'touchstart');
    let move = fromEvent(ele, 'touchmove');
    let end = fromEvent(ele, 'touchend');
    document.oncontextmenu = () => false;
    let t = (evt: TouchEvent) => ({
      x: evt.touches[0].pageX,
      y: evt.touches[0].pageY,
      t: new Date().getTime(),
      type: evt.type
    });
    // |start----------------------------
    // -----------|move------------------
    // --------------------------|end----
    //            |--------------|
    start
      .pipe(
        // 规整
        map(t),
        switchMap(poi1 =>
          move.pipe(
            tap((e: Event) => {
              e.preventDefault();
              e.stopPropagation();
            }),
            // 规整
            map(t),
            // 直到end
            takeUntil(end),
            map(end => ({
              dx: end.x - poi1.x,
              dy: end.y - poi1.y,
              dt: end.t - poi1.t
            })),
            map(res => {
              // x 主导
              if (Math.abs(res.dx) > Math.abs(res.dy)) {
                if (res.dx > this.len) return 'right';
                else if (res.dx < -this.len) return 'left';
                else return 'tap';
              } else {
                if (res.dy > this.len) return 'down';
                else if (res.dy < -this.len) return 'up';
                else return 'tap';
              }
            }),
            tap(res => this.swipeMove.next(res)),
            debounceTime(100)
          )
        )
      )
      .subscribe(res => {});
  }
}
