import {
  InjectionToken,
  Injectable,
  NgModuleFactoryLoader,
  NgModuleRef,
  Inject,
  ViewContainerRef,
  ɵisObservable
} from '@angular/core';
import { of, Observable, merge, BehaviorSubject } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { LazyComponentsInterface } from './interface';
import { LazyComponentModuleFactory } from './lazy-component-module-factory';
import { flatten } from 'underscore';
import { ROUTES } from '@angular/router';
import { Iwe7Base } from 'iwe7/core';
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
    this.lazyComponentConfig = flatten(this.lazyComponentConfig);
    this.lazyComponentConfig.map(res => {
      this.components.set(res.path || res.selector, res.loadChildren);
    });
  }

  public compiler(element: HTMLElement, view: ViewContainerRef, that?: any) {
    this.init(element, view, that);
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
    item: { selector: string; element?: HTMLElement },
    view: ViewContainerRef,
    that?: Iwe7Base<any>
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
          const selector = item.selector;
          let { inputs, outputs, ngContentSelectors } = component;
          if (component) {
            if (!view) {
              throw Error(
                'view is error ' +
                  selector +
                  ` when attach to ${JSON.stringify(view)}`
              );
            }
            let viewRef = view.createComponent(component);
            let instance: Iwe7Base<any> = viewRef.instance;
            if (item.element) {
              let { attributes } = item.element;
              let attr = attributes as NamedNodeMap;
              inputs.map((res, index) => {
                let val: any = attr.getNamedItem(res.propName).value;
                instance[res.propName] = val;
              });
              outputs.map((res, index) => {
                instance[res.propName].subscribe(evt => {
                  that &&
                    that.__events.next({
                      type: res.templateName,
                      selector: selector,
                      data: evt
                    });
                });
              });
            } else {
              // input参数交友props处理
              outputs.map((res, index) => {
                instance[res.propName].subscribe(evt => {
                  if (res.propName !== 'eventsEmit') {
                    instance.__events.next({
                      type: res.templateName,
                      selector: selector,
                      data: evt
                    });
                  }
                });
              });
            }
            return instance;
          }
        }
        return null;
      }),
      tap(instance => {})
    );
  }

  load(selector, view: ViewContainerRef, props?, callback?) {
    return this.createComponent(
      {
        selector: selector,
        element: null
      },
      view,
      null
    ).pipe(
      tap(instance => {
        if (!!props) {
          if (ɵisObservable(props)) {
            instance.setProps(props);
          } else {
            instance.setProps(new BehaviorSubject(props));
          }
        }
        // 监听输出
        instance.__events.subscribe(res => {
          callback && callback(res, instance);
        });
      })
    );
  }
}
