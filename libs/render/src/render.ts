import {
  Injector,
  Injectable,
  NgModuleRef,
  ComponentFactoryResolver,
  NgModuleFactoryLoader,
  NgModuleFactory,
  Inject,
  ViewContainerRef,
  ɵisObservable,
  Compiler,
  ɵisPromise,
  Type,
  IterableDiffers,
  IterableDiffer,
  IterableChanges,
  IterableChangeRecord,
  KeyValueDiffers,
  KeyValueDiffer,
  KeyValueChangeRecord,
  KeyValueChanges,
  NgIterable,
  ComponentRef,
  ɵstringify as stringify,
  KeyValueDifferFactory,
  IterableDifferFactory,
  TrackByFunction,
  ComponentFactory
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { fromPromise } from 'rxjs/observable/fromPromise';
import {
  from,
  Observable,
  Subscriber,
  fromEvent,
  of,
  Subject,
  merge,
  BehaviorSubject
} from 'rxjs';
import { map, tap, switchMap, filter } from 'rxjs/operators';

import { ROUTES } from '@angular/router';
import { flatten, map as _map } from 'underscore';
import { difference, isEqual, size } from 'underscore';
import { RenderOptions } from './interface';
let dragData: any;
let id = 0;
let zindex = 999;

import { RenderKeyValueChange } from './render-keyvalue-change';
import { RenderIterableChange } from './render-iterable-change';
import { MeepoRenderManager } from './render-manager';
import { LokiPageService } from './loki-page';
import { LokiPageDataService } from './loki-page-data';

@Injectable({
  providedIn: 'root'
})
export class MeepoRender {
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
  private defaultView: ViewContainerRef;

  update$: BehaviorSubject<any> = new BehaviorSubject({});
  setDefaultView(view: ViewContainerRef) {
    this.defaultView = this.defaultView || view;
  }
  // 编译成html
  compiler(json: RenderOptions, view: ViewContainerRef = this.defaultView) {
    json.$loki = json.$loki || new Date().getTime() + Math.random() * 10000;
    return fromPromise(this.createElement(json)).pipe(
      // 处理instance
      switchMap((ngModuleFactory: NgModuleFactory<any>) => {
        let instanceMap = this.instanceMap.get(json.$loki);
        if (instanceMap) {
          return of(instanceMap.instance);
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
              let comp = view.createComponent(component);
              this.instanceMap.set(json.$loki, {
                view: view,
                comp: comp,
                instance: comp.instance
              });
              return comp.instance;
            })
          );
        }
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
          let lists = this.renderManager.getChild(json.$loki);
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

  showPage(code, isId: boolean = true, data?: any) {
    let page = this.page.getPage(code, isId);
    let { elements } = page;
    let subs: any = [];
    elements.map(ele => {
      subs.push(this.compiler(ele, this.defaultView));
    });
    return merge(subs);
  }

  showElement(data, inputs?, outputs?, view?: ViewContainerRef) {
    let { $loki, code } = data;
    let element;
    if ($loki) {
      element = this.data.getData(item => {
        return item.$loki + '' === $loki + '';
      });
    } else {
      element = this.data.getData(item => {
        return item.code + '' === code + '';
      });
    }
    if (element) {
      element.inputs = {
        ...element.inputs,
        ...inputs
      };
      element.outputs = {
        ...element.outputs,
        ...outputs
      };
    } else {
      let item = {
        code: data.code,
        title: data.title,
        inputs: inputs || {},
        outputs: outputs || {},
        fid: 0,
        selector: data.selector || 'base-meepo-modal'
      };
      element = this.data.insert(item);
    }

    return this.compiler(element, view || this.defaultView);
  }
  // 移除
  remove(id: any) {
    if (id) {
      let map = this.instanceMap.get(id);
      if (map) {
        map.comp.destroy();
        this.instanceMap.delete(id);
        this.renderManager.remove(id);
      }
    }
    this.update$.next({});
  }
  // 添加
  add(item: RenderOptions) {
    let father = this.instanceMap.get(item.fid);
    let sub;
    if (father) {
      sub = this.compiler(item, father.instance[item.outlet]);
      sub.subscribe();
    } else {
      sub = this.compiler(item, this.defaultView);
      sub.subscribe();
    }
    return sub;
  }
  // 临时添加
  addTmp(opt: RenderOptions, view: ViewContainerRef) {
    opt.$loki = opt.selector;
    return this.compiler(opt, view);
  }
  update(json: any) {
    let map = this.instanceMap.get(json.$loki);
    if (map) {
      let instance = map.instance;
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
      if ('markForCheck' in instance) {
        instance['markForCheck']();
      }
    }
    this.update$.next({});
  }
  get(id: number) {
    let map = this.instanceMap.get(id);
    return map;
  }
  // private
  constructor(
    private moduleFactoryLoader: NgModuleFactoryLoader,
    private moduleRef: NgModuleRef<any>,
    @Inject(ROUTES) private lazy: any,
    private injector: Injector,
    private ngCompiler: Compiler,
    private renderManager: MeepoRenderManager,
    private page: LokiPageService,
    private data: LokiPageDataService,
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

  private createElement(json: RenderOptions) {
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

  private getZIndex() {
    return zindex++;
  }
}
