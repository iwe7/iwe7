import {
  Component,
  OnInit,
  HostBinding,
  Input,
  HostListener,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
  OnChanges,
  SimpleChanges,
  InjectionToken,
  Inject,
  Injector
} from '@angular/core';
import {
  map,
  debounceTime,
  filter,
  throttleTime,
  switchMap,
  startWith
} from 'rxjs/operators';
import { fromEvent, Subject } from 'rxjs';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { IcssService } from 'iwe7/icss';
import { Observable } from 'rxjs/Observable';

export const Iwe7ButtonConfigToken = new InjectionToken<any>(
  'Iwe7ButtonToken',
  {
    providedIn: 'root',
    factory: () => {
      return {
        default: {
          color: '#fff',
          bg: '#4a4c5b'
        },
        disabled: {
          bg: '#ccc',
          color: '#fff'
        },
        light: {
          bg: '#fff',
          color: '#666'
        },
        outline: {
          bg: 'transparent',
          color: '#666'
        },
        primary: {
          bg: '#fc9153',
          color: '#fff'
        }
      };
    }
  }
);
@Component({
  selector: 'iwe7-button',
  templateUrl: './iwe7-button.component.html',
  styleUrls: ['./iwe7-button.component.scss']
})
export class Iwe7ButtonComponent implements OnInit, OnChanges {
  // 获取按钮dom
  @ViewChild('btn') btn: ElementRef;
  // 控制按钮颜色
  style$: Subject<{ bg: string; color: string }> = new Subject();
  // 控制按钮是否可用
  @Input() disabled: boolean;
  @Input() color: string = 'default';

  @Output() done: EventEmitter<this> = new EventEmitter();
  @Input() autoplay: number = 0;
  // 上一个状态
  lastState: any;
  config: any;
  constructor(
    // 获取父级dom
    private ele: ElementRef,
    private icss: IcssService,
    private injector: Injector
  ) {}

  ngOnInit() {
    this.config = this.injector.get(Iwe7ButtonConfigToken);
    const button = this.style$
      .asObservable()
      .pipe(startWith(this.config[this.color]));
    this.icss.init({ theme: button }, this.ele);
    this.done.emit(this);
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('color' in changes) {
      const color = changes['color'].currentValue;
      setTimeout(() => {
        this.setColor(color);
      }, 0);
    }
    if ('disabled' in changes) {
      const disabled = coerceBooleanProperty(changes['disabled'].currentValue);
      setTimeout(() => {
        this.handDisabled(disabled);
      }, 0);
    }
  }

  private handDisabled(disabled) {
    if (disabled) {
      this.style$.next(this.config.disabled);
    } else {
      this.style$.next(this.icss.getState('theme'));
    }
  }

  public setColor(color: string) {
    if (!this.disabled) {
      if (!!this.config[color]) {
        const my = this.config[color];
        if (my.fn) {
          if (this.autoplay > 0) {
            // 自动播放
            setInterval(() => {
              this.style$.next(my.fn());
            }, this.autoplay);
            return;
          }
          this.style$.next(my.fn());
          return;
        }
        this.style$.next(this.config[color]);
      } else {
        this.style$.next(this.config['default']);
      }
    }
  }
}
