import { Element } from '../../element';
import {
  OnInit,
  Component,
  ViewContainerRef,
  Input,
  ViewChild,
  ElementRef,
  HostBinding,
  HostListener,
  OnDestroy,
  Renderer2
} from '@angular/core';
import { Subject, fromEvent, merge } from 'rxjs';
import { tap, map, switchMap, takeUntil, filter } from 'rxjs/operators';
import * as Transform from 'css3transform';

let controlMap: Map<string, BaseControl> = new Map();
@Component({
  selector: 'base-control',
  templateUrl: './control.html',
  styleUrls: ['./control.scss']
})
export class BaseControl implements OnInit, OnDestroy {
  @HostBinding('style.width.px') width: number = 0;
  @HostBinding('style.height.px') height: number = 0;
  @HostBinding('style.left.px') left: number = 0;
  @HostBinding('style.top.px') top: number = 0;
  startPosition: any = {
    left: 0,
    top: 0,
    width: 1,
    height: 1
  };

  @ViewChild('topLeft') topLeft: ElementRef;
  @ViewChild('topRight') topRight: ElementRef;
  @ViewChild('bottomLeft') bottomLeft: ElementRef;
  @ViewChild('bottomRight') bottomRight: ElementRef;

  @ViewChild('topCenter') topCenter: ElementRef;
  @ViewChild('bottomCenter') bottomCenter: ElementRef;
  @ViewChild('leftCenter') leftCenter: ElementRef;
  @ViewChild('rightCenter') rightCenter: ElementRef;

  @ViewChild('centerCenter') centerCenter: ElementRef;

  @ViewChild('control') ele: ElementRef;

  // 改为translate
  id: string;
  change$: Subject<any> = new Subject();
  constructor(private view: ViewContainerRef, private render: Renderer2) {
    this.id = new Date().getTime() + '';
    controlMap.set(this.id, this);
  }

  ngOnInit() {
    let ele = this.ele.nativeElement;
    Transform(ele);
    merge(
      this.handlerCenterCenter(),
      this.handlerLeftCenter(),
      this.handlerRightCenter(),
      this.handlerBottomCenter(),
      this.handlerTopCenter(),
      this.handlerBottomLeft(),
      this.handlerBottomRight(),
      this.handlerTopRight(),
      this.handlerTopLeft(),
      this.handlerKeyDown()
    ).subscribe();
  }

  ngOnDestroy() {
    controlMap.delete(this.id);
  }

  private onChange() {
    this.change$.next({
      left: this.left || 0,
      top: this.top || 0,
      width: this.width || 1,
      height: this.height || 1
    });
  }
  // 位置移动 over
  updateCenterCenter(res) {
    this.left = this.startPosition.left + res.dx;
    this.top = this.startPosition.top + res.dy;
    this.onChange();
  }
  private handlerCenterCenter() {
    return this.createMove(this.centerCenter.nativeElement).pipe(
      // 变换
      tap(res => {
        controlMap.forEach(item => item.updateCenterCenter(res));
      })
    );
  }
  updateLeftCenter(res) {
    this.left = this.startPosition.left + res.dx;
    this.width = this.startPosition.width - res.dx;
    this.onChange();
  }
  // 控制左边中心 边长放大 计算放大了多少倍
  private handlerLeftCenter() {
    return this.createMove(this.leftCenter.nativeElement).pipe(
      tap(res => {
        controlMap.forEach(item => item.updateLeftCenter(res));
      })
    );
  }
  updateRightCenter(res) {
    this.width = this.startPosition.width + res.dx;
    this.onChange();
  }
  // 控制右边中心
  private handlerRightCenter() {
    return this.createMove(this.rightCenter.nativeElement).pipe(
      tap(res => {
        controlMap.forEach(item => item.updateRightCenter(res));
      })
    );
  }
  // 控制上边中心
  updateBottomCenter(res) {
    this.height = this.startPosition.height + res.dy;
    this.onChange();
  }
  private handlerBottomCenter() {
    return this.createMove(this.bottomCenter.nativeElement).pipe(
      tap(res => {
        controlMap.forEach(item => item.updateBottomCenter(res));
      })
    );
  }
  // 控制下边中心
  updateTopCenter(res) {
    // 上拉 增加height 减少top
    this.height = this.startPosition.height - res.dy;
    this.top = this.startPosition.top + res.dy;

    this.onChange();
  }
  private handlerTopCenter() {
    return this.createMove(this.topCenter.nativeElement).pipe(
      tap(res => {
        controlMap.forEach(item => item.updateTopCenter(res));
      })
    );
  }
  // 控制下左
  updateBottomLeft(res) {
    this.width = this.startPosition.width - res.dx;
    this.height = this.startPosition.height - res.dx;
    this.left = this.startPosition.left + res.dx;
    this.onChange();
  }
  private handlerBottomLeft() {
    return this.createMove(this.bottomLeft.nativeElement).pipe(
      tap(res => {
        controlMap.forEach(item => item.updateBottomLeft(res));
      })
    );
  }
  // 控制下右
  updateBottomRight(res) {
    this.width = this.startPosition.width + res.dx;
    this.height = this.startPosition.height + res.dx;
    this.onChange();
  }
  private handlerBottomRight() {
    return this.createMove(this.bottomRight.nativeElement).pipe(
      tap(res => {
        controlMap.forEach(item => item.updateBottomRight(res));
      })
    );
  }
  // 控制上右
  updateTopRight(res) {
    this.height = this.startPosition.height - res.dy;
    this.width = this.startPosition.width + res.dx;
    this.onChange();
  }
  private handlerTopRight() {
    return this.createMove(this.topRight.nativeElement).pipe(
      tap(res => {
        controlMap.forEach(item => item.updateTopRight(res));
      })
    );
  }
  // 控制上左
  updateTopLeft(res) {
    this.height = this.startPosition.height - res.dy;
    this.width = this.startPosition.width - res.dx;
    this.left = this.startPosition.left + res.dx;
    this.onChange();
  }
  private handlerTopLeft() {
    return this.createMove(this.topLeft.nativeElement).pipe(
      tap(res => {
        controlMap.forEach(item => item.updateTopLeft(res));
      })
    );
  }
  handlerLeft() {
    this.left = this.left - 1;
    this.onChange();
  }
  handlerRight() {
    this.left = this.left + 1;
    this.onChange();
  }
  handlerUp() {
    this.top = this.top - 1;
    this.onChange();
  }
  handlerDown() {
    this.top = this.top + 1;
    this.onChange();
  }

  handlerKeyDown() {
    return fromEvent(document, 'keydown').pipe(
      map((res: any) => res.keyCode),
      tap(res => {
        if (res === 37) {
          controlMap.forEach(item => item.handlerLeft());
        }
        if (res === 38) {
          controlMap.forEach(item => item.handlerUp());
        }
        if (res === 39) {
          controlMap.forEach(item => item.handlerRight());
        }
        if (res === 40) {
          controlMap.forEach(item => item.handlerDown());
        }
      }),
      takeUntil(
        fromEvent(document, 'keydown').pipe(
          map((res: any) => res.keyCode),
          filter(res => {
            if ([16, 17, 37, 38, 39, 40, 91].indexOf(res) === -1) {
              this.change$.next('clear');
              return true;
            } else {
              return false;
            }
          })
        )
      )
    );
  }
  // 创建move监听
  updateMove(res) {
    this.startPosition = {
      top: this.top,
      left: this.left,
      width: this.width,
      height: this.height
    };
  }
  private createMove(ele: any) {
    let start = {
      x: 0,
      y: 0
    };
    return fromEvent(ele, 'mousedown').pipe(
      tap((res: MouseEvent) => {
        res.stopPropagation();
        res.preventDefault();
        controlMap.forEach(item => item.updateMove(res));
      }),
      map((res: MouseEvent) => {
        return {
          x: res.pageX,
          y: res.pageY
        };
      }),
      tap(res => {
        start = {
          x: res.x,
          y: res.y
        };
      }),
      switchMap(res => {
        return fromEvent(document, 'mousemove').pipe(
          map((res: MouseEvent) => {
            return {
              x: res.pageX,
              y: res.pageY
            };
          }),
          map(res => {
            return {
              dx: -start.x + res.x,
              dy: -start.y + res.y
            };
          }),
          takeUntil(fromEvent(document, 'mouseup'))
        );
      })
    );
  }
}
