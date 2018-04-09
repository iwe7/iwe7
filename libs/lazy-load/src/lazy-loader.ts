import {
  InjectionToken,
  Injectable,
  NgModuleFactoryLoader,
  NgModuleRef,
  Inject,
  ViewContainerRef
} from '@angular/core';
import { of, Observable } from 'rxjs';
import { fromPromise } from 'rxjs/observable/fromPromise';

import { LazyComponentsInterface } from './interface';
import { LAZY_COMPONENTS } from './token';
import { LazyComponentModuleFactory } from './lazy-component-module-factory';

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
    this.lazyComponentConfig.map(res => {
      this.components.set(res.path, res.loadChildren);
    });
  }

  init(element: HTMLElement, view: ViewContainerRef): Observable<void> {
    const selectors: any[] = Array.from(this.components.keys()).filter(s =>
      element.querySelector(s)
    );
    if (!selectors.length) {
      return of(undefined);
    }
    return fromPromise(
      Promise.all(selectors.map(s => this.create(s, view))).then(
        result => undefined
      )
    );
  }

  private create(selector: string, view: ViewContainerRef) {
    let path = this.components.get(selector);
    return this.lazyComponentModuleFactory
      .getComponentModuleByPath(path)
      .then(res => {
        let instance = res.getComponent(selector, this.moduleRef.injector);
        view.createComponent(instance);
      });
  }
}
