import {
  Directive,
  Input,
  OnChanges,
  ViewContainerRef,
  TemplateRef,
  ComponentFactoryResolver,
  ComponentFactory,
  SimpleChanges,
  Renderer2,
  OnInit,
  ChangeDetectorRef,
  ɵisObservable,
  ɵisPromise
} from '@angular/core';
import * as _ from 'underscore';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { distinctUntilChanged } from 'rxjs/operators';

import { Iwe7DesignBase } from './iwe7-design';
import { LazyLoaderService } from 'iwe7/lazy-load';
import { Observable, Subject } from 'rxjs';
import { Iwe7Base } from 'iwe7/core';
/**
 *design="name;class 'class';style 'style';drag true; drop true;"
 */
export const instanceMap: Map<string, any> = new Map();

export interface Iwe7DesignProps {
  selector: string;
}

@Directive({
  selector:
    '[iwe7Design],[design],[designClass],[designStyle],[designDrag],[designDrop],[designInstance]'
})
export class Iwe7DesignDirective extends Iwe7Base<Iwe7DesignProps>
  implements OnInit {
  viewContainerRef: ViewContainerRef;
  @Input()
  set design(val: Observable<Iwe7DesignProps> | Subject<Iwe7DesignProps>) {
    this.props = val;
  }
  get design() {
    return this.props;
  }
  constructor(
    private _viewContainerRef: ViewContainerRef,
    private lazyloador: LazyLoaderService,
    cd: ChangeDetectorRef
  ) {
    super(cd);
    this.viewContainerRef = _viewContainerRef;
  }

  __propsHandler() {
    this.subscription && this.subscription.unsubscribe();
    this.subscription = this.props
      .pipe(
        // 特殊处理 && 去重复
        distinctUntilChanged((x, y) => {
          return x.selector === y.selector;
        })
      )
      .subscribe(res => {
        this._props = res;
        this.onPropsChange(res);
        this.cd.markForCheck();
      });
  }

  onPropsChange(res: Iwe7DesignProps) {
    this.viewContainerRef.clear();
    let name = res.selector || null;
    if (name) {
      this.lazyloador
        .createComponent(name, this._viewContainerRef)
        .subscribe((instance: Iwe7Base<any>) => {
          instance.setProps(this.props);
          instance.props.subscribe(res => {
            instance.onPropsChange(res);
          });
        });
    }
  }
}
