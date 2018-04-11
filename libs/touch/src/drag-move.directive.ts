import {
  Directive,
  ElementRef,
  HostBinding,
  OnInit,
  Input,
  Renderer2,
  Output,
  EventEmitter
} from '@angular/core';
import {
  fromEvent,
  merge,
  animationFrameScheduler,
  generate,
  BehaviorSubject
} from 'rxjs';
import {
  map,
  tap,
  throttleTime,
  debounceTime,
  takeUntil,
  switchMap
} from 'rxjs/operators';
import { ZIndexService } from 'iwe7/themes/src/z-index.service';
@Directive({
  selector: '[dragmove]'
})
export class DragmoveDirective implements OnInit {
  // 如果设置了，那么记录位置，下次来的时候还原上一次操作位置
  _cacheKey: string;
  @Input() dragmove: BehaviorSubject<any> = new BehaviorSubject({});
  isStart: boolean = false;
  _style: any;
  constructor(
    public ele: ElementRef,
    public render: Renderer2,
    public zindex: ZIndexService
  ) {}
  ngOnInit() {
    this.onDrag();
  }
  // ------------------------------
  onDrag() {
    this.dragmove.subscribe(res => {
      this._style = { ...this._style, ...res };
    });
    const mousemove = fromEvent(document, 'mousemove');
    const touchmove = fromEvent(document, 'touchmove');

    const touchend = fromEvent(this.ele.nativeElement, 'touchend');
    const mouseup = fromEvent(this.ele.nativeElement, 'mouseup');

    const mousedown = fromEvent(this.ele.nativeElement, 'mousedown');
    const touchstart = fromEvent(this.ele.nativeElement, 'touchstart');

    const rect = this.getRect();
    const move = merge(mousedown, touchstart)
      .pipe(
        tap((res: Event) => {
          res.stopPropagation();
          res.preventDefault();
          this._style.zIndex = this.zindex.getIndex();
          this.moveStyle(this._style);
        }),
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
              })
            ),
            animationFrameScheduler
          ).pipe(takeUntil(merge(mousedown, touchstart)))
        )
      )
      .pipe(
        map(res => {
          return {
            left: res.x - rect.width / 2,
            top: res.y - rect.height / 2,
            display: 'block'
          };
        }),
        tap(res => this.moveStyle(res))
      );
    move.subscribe((res: any) => {});
  }

  getRect() {
    const nodeRect = this.ele.nativeElement.getBoundingClientRect();
    const rect = {
      height: nodeRect.height,
      width: nodeRect.width
    };
    return rect;
  }

  moveStyle(obj: { left: number; top: number; display: string }) {
    this._style = { ...this._style, ...obj };
    this.dragmove.next(this._style);
  }
}
