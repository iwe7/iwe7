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
import { LAZY_COMPONENTS } from './token';
import { LazyComponentModuleFactory } from './lazy-component-module-factory';
import * as _ from 'underscore';
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
    @Inject(LAZY_COMPONENTS)
    public lazyComponentConfig: LazyComponentsInterface[]
  ) {
    this.lazyComponentModuleFactory = new LazyComponentModuleFactory(
      this.moduleFactoryLoader
    );
    this.lazyComponentConfig = _.flatten(this.lazyComponentConfig);
    this.lazyComponentConfig.map(res => {
      this.components.set(res.selector, res.loadChildren);
    });
  }

  public init(element: HTMLElement, view: ViewContainerRef): Observable<void> {
    const selectors: any[] = Array.from(this.components.keys()).filter(s =>
      element.querySelector(s)
    );
    if (!selectors.length) {
      return of(undefined);
    }
    let subs: Observable<any>[] = [];
    selectors.forEach(s => {
      subs.push(this.create(s, view));
    });
    return merge(...subs);
  }

  public create(selector: string, view: ViewContainerRef) {
    let path = this.components.get(selector);
    return fromPromise(
      this.lazyComponentModuleFactory.getComponentModuleByPath(path)
    ).pipe(
      map(res => {
        let instance = res.getComponent(selector, this.moduleRef.injector);
        return instance;
      }),
      tap(instance => {
        view.createComponent(instance);
      })
    );
  }
}
