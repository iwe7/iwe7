import {
  InjectionToken,
  Injectable,
  NgModuleFactoryLoader,
  NgModuleRef,
  Inject,
  ViewContainerRef
} from '@angular/core';
import { of, Observable, merge } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { LazyComponentsInterface } from './interface';
import { LazyComponentModuleFactory } from './lazy-component-module-factory';
import * as _ from 'underscore';
import { ROUTES } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LazyLoaderService {
  // 组件库
  components: Map<string, string> = new Map();
  lazyComponentModuleFactory: LazyComponentModuleFactory;

  constructor(
    private moduleFactoryLoader: NgModuleFactoryLoader,
    private moduleRef: NgModuleRef<any>,
    @Inject(ROUTES) public lazyComponentConfig: LazyComponentsInterface[]
  ) {
    this.lazyComponentModuleFactory = new LazyComponentModuleFactory(
      this.moduleFactoryLoader
    );
    this.lazyComponentConfig = _.flatten(this.lazyComponentConfig);
    this.lazyComponentConfig.map(res => {
      this.components.set(res.path || res.selector, res.loadChildren);
    });
    console.log(this.components);
  }

  public init(
    element: HTMLElement,
    view: ViewContainerRef,
    that?: any
  ): Observable<void> {
    const selectors: any[] = Array.from(this.components.keys())
      .map(s => {
        let s2: HTMLElement = element.querySelector(s);
        return {
          element: s2,
          selector: s
        };
      })
      .filter(res => {
        return res.element;
      });
    if (!selectors.length) {
      return of(undefined);
    }
    let subs: Observable<any>[] = [];
    selectors.forEach(s => {
      subs.push(this.createComponent(s, view, that));
    });
    return merge(...subs);
  }

  public createComponent(
    item: { selector: string; element: HTMLElement },
    view: ViewContainerRef,
    that: any
  ): Observable<any> {
    let path = this.components.get(item.selector);
    return fromPromise(
      this.lazyComponentModuleFactory.getComponentModuleByPath(path)
    ).pipe(
      map(res => {
        if (res) {
          let component = res.getComponent(
            item.selector,
            this.moduleRef.injector
          );
          let { attributes } = item.element;
          let attr = attributes as NamedNodeMap;
          let { inputs, outputs, ngContentSelectors } = component;
          if (component) {
            let viewRef = view.createComponent(component);
            let instance = viewRef.instance;
            inputs.map((res, index) => {
              let val: any = attr.getNamedItem(res.propName).value;
              instance[res.propName] = val;
            });
            outputs.map((res, index) => {
              instance[res.propName].subscribe(res => {
                that[res.propName] && that[res.propName](res);
              });
            });
            return instance;
          }
        }
        return null;
      }),
      tap(instance => {})
    );
  }
}
