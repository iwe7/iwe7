import { NgModuleFactoryLoader, NgModuleRef, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
import { LazyComponentsInterface } from './interface';
import { LazyComponentModuleFactory } from './lazy-component-module-factory';
export declare class LazyLoaderService {
    private moduleFactoryLoader;
    private moduleRef;
    lazyComponentConfig: LazyComponentsInterface[];
    components: Map<string, string>;
    lazyComponentModuleFactory: LazyComponentModuleFactory;
    constructor(moduleFactoryLoader: NgModuleFactoryLoader, moduleRef: NgModuleRef<any>, lazyComponentConfig: LazyComponentsInterface[]);
    init(element: HTMLElement, view: ViewContainerRef): Observable<void>;
    createComponent(selector: string, view: ViewContainerRef): Observable<any>;
}
