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
  OnDestroy
} from '@angular/core';
import { Subject } from 'rxjs';
import { toBoolean } from 'iwe7/antd/core';

@Component({
  selector: 'base-context-menu',
  templateUrl: './context-menu.html',
  styleUrls: ['./context-menu.scss']
})
export class BaseContextMenu extends Element implements OnInit, OnDestroy {
  @HostBinding('style.top.px') top: number;
  @HostBinding('style.left.px') left: number;

  list: any[] = [];

  constructor(view: ViewContainerRef) {
    super(view);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  onClick(item) {
    this.click$.next(item);
  }
}
