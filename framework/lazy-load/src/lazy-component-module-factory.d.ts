import { NgModuleFactoryLoader, NgModuleFactory, Injector, ComponentFactory } from '@angular/core';
import { LazyComponentModuleBase } from './base';
/**
 * 懒加载module factory
 */
export declare class LazyComponentModuleFactory {
    private moduleFactoryLoader;
    /**
     * 构造器
     */
    constructor(moduleFactoryLoader: NgModuleFactoryLoader);
    /**
     * 加载
     */
    private load(path);
    /**
     * 根据路径获取组件module
     */
    getComponentModuleByPath(path: string): Promise<LazyComponentModule<LazyComponentModuleBase>>;
}
export declare class LazyComponentModule<T> {
    moduleFactory: NgModuleFactory<LazyComponentModuleBase>;
    constructor(moduleFactory: NgModuleFactory<LazyComponentModuleBase>);
    getComponent(selector: string, injector?: Injector): ComponentFactory<any>;
}
