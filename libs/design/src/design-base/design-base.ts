import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ElementRef,
  Renderer2,
  ViewContainerRef
} from '@angular/core';
import { Iwe7DesignBase } from 'iwe7/design';
import { KeyValue } from 'iwe7/core';
// 基础组件
import { BehaviorSubject } from 'rxjs';
import { IcssService } from 'iwe7/icss';
import { LazyLoaderService } from 'iwe7/lazy-load';
export interface DesignBaseProps {
  // 组件选择器
  selector?: string;
  // 组件样式
  style?: KeyValue;
  // 组件属性
  attrs?: KeyValue;
  // 组件内容
  props?: DesignBaseProps[];
  callback?: Function;
}
export class DesignBase<T extends DesignBaseProps> extends Iwe7DesignBase<T>
  implements OnInit {
  private _style: KeyValue = {};
  style$: BehaviorSubject<KeyValue> = new BehaviorSubject({});
  _viewRef: ViewContainerRef;
  constructor(
    cd: ChangeDetectorRef,
    public ele: ElementRef,
    public icss: IcssService,
    public render: Renderer2,
    public loader: LazyLoaderService
  ) {
    super(cd);
    this.icss.init(
      {
        design: this.style$
      },
      this.ele
    );
  }

  ngOnInit() {
    super.ngOnInit();
  }

  onPropsChange(res: T) {
    let { style, attrs, props } = res;
    if (style) {
      this._style = { ...this._style, ...style };
      this.style$.next(this._style);
    }
    if (attrs) {
      this.updateAttr(attrs);
    }
  }

  private updateAttr(attrs: KeyValue) {
    Object.keys(attrs).map(key => {
      this.render.setAttribute(this.ele.nativeElement, key, attrs[key]);
    });
  }

  setViewRef(e: ViewContainerRef) {
    this._viewRef = e;
    this.props.subscribe(res => {
      let { props } = res;
      this._viewRef.clear();
      if (props.length > 0) {
        props.map(pro => {
          this.loader.load(pro.selector, this._viewRef, pro, pro.callback).subscribe();
        });
      }
    });
  }
}