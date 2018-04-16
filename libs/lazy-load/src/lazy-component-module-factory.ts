import {
  NgModuleFactoryLoader,
  NgModuleFactory,
  Injector,
  NgModuleRef,
  Type,
  ComponentFactory
} from '@angular/core';
import { Observable } from 'rxjs';
import { LazyComponentModuleBase } from './base';

const lazyComponentModule: Map<string, LazyComponentModule<any>> = new Map();
/**
 * 懒加载module factory
 */
export class LazyComponentModuleFactory {
  /**
   * 构造器
   */
  constructor(private moduleFactoryLoader: NgModuleFactoryLoader) {}
  /**
   * 加载
   */
  private load(
    path: string
  ): Promise<LazyComponentModule<LazyComponentModuleBase>> {
    console.log('moduleFactoryLoader',this.moduleFactoryLoader);
    return new Promise((resolve, reject) => {
      this.moduleFactoryLoader
        .load(path)
        .then(moduleFactory => {
          let module = new LazyComponentModule<LazyComponentModuleBase>(
            moduleFactory
          );
          lazyComponentModule.set(path, module);
          resolve(module);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
  /**
   * 根据路径获取组件module
   */
  public getComponentModuleByPath(
    path: string
  ): Promise<LazyComponentModule<LazyComponentModuleBase>> {
    if (!path) {
      return new Promise((resolve, reject) => {
        resolve(null);
      });
    }
    let cacheLazyComponentModule = lazyComponentModule.get(path);
    if (cacheLazyComponentModule) {
      return new Promise((resolve, reject) => {
        resolve(cacheLazyComponentModule);
      });
    } else {
      return this.load(path);
    }
  }
}

// 懒加载module
export class LazyComponentModule<T> {
  constructor(public moduleFactory: NgModuleFactory<LazyComponentModuleBase>) {}
  // 获取component
  getComponent(selector: string, injector?: Injector): ComponentFactory<any> {
    try {
      const moduleRef = this.moduleFactory.create(injector);
      const componentFactoryResolver = moduleRef.componentFactoryResolver;
      const element = moduleRef.instance.getComponentByName(selector);
      let re = componentFactoryResolver.resolveComponentFactory(element);
      return re;
    } catch (err) {
      console.log(`选择器${selector}有误！`);
    }
  }
}
