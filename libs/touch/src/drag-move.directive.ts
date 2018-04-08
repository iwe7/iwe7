import { Directive, ElementRef, HostBinding, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { TouchService } from './touch.service';

@Directive({
  selector: '[dragmove]'
})
export class DragmoveDirective implements OnInit {
  @HostBinding('style.left.px') _left: number;
  @HostBinding('style.top.px') _top: number;
  isStart: boolean = false;
  constructor(public ele: ElementRef, public touch: TouchService) {}
  ngOnInit() {
    this.onDrag();
  }
  onDrag() {
    const mousedown = fromEvent(this.ele.nativeElement, 'mousedown');
    const mouseup = fromEvent(this.ele.nativeElement, 'mouseup');
    const mousemove = fromEvent(this.ele.nativeElement, 'mousemove');
    const rect = this.touch.rect(this.ele.nativeElement);
    mousemove.subscribe((res: MouseEvent) => {
      this._top = res.clientY - rect.height / 2;
      this._left = res.clientX - rect.width / 2;
    });
  }
}
