import {
  Injectable,
  ɵisObservable,
  ViewContainerRef,
  ɵisPromise,
  NgModuleFactoryLoader,
  NgModuleRef,
  Inject,
  Injector,
  Compiler,
  ComponentRef,
  ComponentFactoryResolver,
  Type,
  NgModuleFactory,
  ComponentFactory
} from '@angular/core';
import { ROUTES } from '@angular/router';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { BehaviorSubject, of, Observable, Subscriber } from 'rxjs';
import { map, switchMap, filter, tap } from 'rxjs/operators';

import { Title } from '@angular/platform-browser';
import { flatten, map as _map, difference, isEqual, size } from 'underscore';
@Injectable({
  providedIn: 'root'
})
export class MeepoRender {
  defaultView: ViewContainerRef;
  private componentFactoryResolver: ComponentFactoryResolver;
  private components: Map<string, any> = new Map();
  // 实例表
  private instanceMap: Map<
    number,
    {
      view: ViewContainerRef;
      comp: ComponentRef<any>;
      instance: any;
    }
  > = new Map();
  update$: BehaviorSubject<any> = new BehaviorSubject({});
  // private
  constructor(
    private moduleFactoryLoader: NgModuleFactoryLoader,
    private moduleRef: NgModuleRef<any>,
    @Inject(ROUTES) private lazy: any,
    private injector: Injector,
    private ngCompiler: Compiler,
    private title: Title
  ) {
    this.lazy = flatten(this.lazy);
    this.lazy.map((res: any) => {
      let { children } = res;
      if (children) {
        children.map(child => {
          this.components.set(child.path, {
            path: child.loadChildren,
            data: child.data
          });
        });
      } else {
        this.components.set(res.path || res.selector, {
          path: res.loadChildren,
          data: res.data
        });
      }
    });
  }
  private compileModuleAndAllComponentsAsync(moduleType: Type<any>) {
    return new Promise((resolve, reject) => {
      this.ngCompiler
        .compileModuleAndAllComponentsAsync(moduleType)
        .then(res => {
          resolve(res.ngModuleFactory);
        });
    });
  }

  private createElement(json: any) {
    let comp = this.components.get(json.selector);
    if (comp) {
      if (typeof comp.path === 'function') {
        let type = comp.path();
        // 检查是否promise
        if (ɵisPromise(type)) {
          return type.then(res => {
            return this.compileModuleAndAllComponentsAsync(type);
          });
        } else if (ɵisObservable(type)) {
          return new Promise((resolve, reject) => {
            type.subscribe(res => {
              this.compileModuleAndAllComponentsAsync(type).then(res => {
                resolve(res);
              });
            });
          });
        } else {
          return this.compileModuleAndAllComponentsAsync(type);
        }
      } else {
        return this.moduleFactoryLoader.load(comp.path);
      }
    } else {
      json.selector = 'base-view';
      return this.createElement(json);
    }
  }

  setDefaultView(view: ViewContainerRef) {
    this.defaultView = view;
  }

  compiler(json: any, view?: ViewContainerRef) {
    view = view || this.defaultView;
    json.$loki = json.$loki || new Date().getTime() + Math.random() * 10000;
    return fromPromise(this.createElement(json)).pipe(
      // 处理instance
      switchMap((ngModuleFactory: NgModuleFactory<any>) => {
        let instanceMap = this.instanceMap.get(json.$loki);
        if (instanceMap) {
          return of(instanceMap);
        } else {
          return of(ngModuleFactory).pipe(
            // NgModuleFactory
            map((ngModuleFactory: NgModuleFactory<any>) => {
              let moduleRef = ngModuleFactory.create(this.injector);
              return {
                resolver: moduleRef.componentFactoryResolver,
                instance: moduleRef.instance
              };
            }),
            // component
            map(res => {
              if ('get' in res.instance) {
                let component = res.instance.get(json.selector);
                if (typeof component === 'function') {
                  return res.resolver.resolveComponentFactory(component);
                } else {
                  console.warn(
                    `${json.selector}的ngModule->get方法没有返回正确的值`
                  );
                  return false;
                }
              } else if ('getComponentByName' in res.instance) {
                // 兼容老板本
                let component = res.instance.getComponentByName(json.selector);
                if (typeof component === 'function') {
                  return res.resolver.resolveComponentFactory(component);
                } else {
                  console.warn(
                    `${
                      json.selector
                    }的ngModule->getComponentByName方法没有返回正确的值`
                  );
                  return false;
                }
              } else {
                console.warn(
                  `${json.selector}的ngModule没有get或者getComponentByName方法`
                );
                return false;
              }
            }),
            filter(res => !!res),
            // 挂载到试图
            map((component: ComponentFactory<any>) => {
              // let factory = component.create(this.injector);
              let comp = view.createComponent(component);
              let ret = {
                view: view,
                comp: comp,
                instance: comp.instance
              };
              this.instanceMap.set(json.$loki, ret);
              return ret;
            })
          );
        }
      }),
      map(res => {
        return res.instance;
      }),
      // 变换标题
      tap(instance => {
        let { title } = json;
        if (title) {
          this.title.setTitle(title);
        }
      }),
      // 绑定inputs
      tap(instance => {
        // 绑定id
        Object.defineProperty(instance, 'id', {
          get: () => {
            return json.$loki;
          },
          set: val => {
            // 设置数据
            json.$loki = val;
          }
        });
        Object.defineProperty(instance, 'title', {
          get: () => {
            return json.title;
          },
          set: val => {
            // 设置数据
            json.title = val;
          }
        });
        Object.defineProperty(instance, 'code', {
          get: () => {
            return json.code;
          },
          set: val => {
            // 设置数据
            json.code = val;
          }
        });
        _map(json.inputs || {}, (item, key) => {
          Object.defineProperty(instance, key, {
            get: () => {
              return item;
            },
            set: val => {
              item = val;
            }
          });
        });
      }),
      // 绑定完毕 调用更新
      tap(instance => {
        if ('markForCheck' in instance) {
          instance['markForCheck']();
        }
      }),
      // 绑定outputs
      switchMap(instance => {
        return Observable.create((subscriber: Subscriber<any>) => {
          // 绑定子级
          // let lists = this.renderManager.getChild(json.$loki);
          let lists = json.children;
          lists.map(item => {
            if (instance[item.outlet]) {
              this.compiler(item, instance[item.outlet]).subscribe(
                (res: any) => {
                  subscriber.next({
                    type: res.type,
                    data: res.data
                  });
                }
              );
            }
          });
          json.outputs = json.outputs || {};
          for (let key in json.outputs) {
            let output = json.outputs[key];
            if (ɵisObservable(instance[key])) {
              instance[key].subscribe(res => {
                subscriber.next({
                  type: output,
                  data: res
                });
              });
            }
          }
          this.update$.next({});
        });
      })
    );
  }
}
