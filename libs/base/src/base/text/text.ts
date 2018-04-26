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
  selector: 'base-text',
  template: `{{text}}`
})
export class BaseText extends Element implements OnInit, OnDestroy {
  @Input() text: string;

  // 是否可复制
  @Input() canCopy: boolean;
  input: any;

  copy$: Subject<any> = new Subject();
  constructor(view: ViewContainerRef) {
    super(view);
    this.scale$.subscribe(res => {
      if (res !== 'clear') {
        this._updateStyles({
          ['line-height']: (res.height > 10 ? res.height : 34) + 'px',
          [`text-align`]: 'center'
        });
      }
    });
  }

  @HostListener('dblclick')
  _click() {
    if (toBoolean(this.canCopy)) {
      this.removeInput();
      this.input = this._doc.createElement('input');
      this.input.value = this._ele.nativeElement.innerHTML;
      this._doc.documentElement.appendChild(this.input);
      this.input.select();
      this._doc.execCommand('Copy');
      this.input.style.display = 'none';
      this._message.success('复制成功');
      this.copy$.next(this.text);
      this.click$.next(this.text);
    }
  }
  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy() {
    this.removeInput();
    this.copy$.complete();
    super.ngOnDestroy();
  }

  private removeInput() {
    if (this.input) {
      this._render.removeChild(this._ele.nativeElement, this.input);
    }
  }
}
