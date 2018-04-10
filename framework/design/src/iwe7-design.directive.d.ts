import { OnChanges, ViewContainerRef, TemplateRef, SimpleChanges, Renderer2, OnInit } from '@angular/core';
import { LazyLoaderService } from 'iwe7/lazy-load';
/**
 *design="name;class 'class';style 'style';drag true; drop true;"
 */
export declare const instanceMap: Map<string, any>;
export declare class Iwe7DesignDirective implements OnChanges, OnInit {
    private _viewContainerRef;
    private template;
    private renderer2;
    private lazyloador;
    design: any;
    designClass: {
        [key: string]: boolean;
    };
    designStyle: {
        [key: string]: string;
    };
    designDrag: boolean;
    designDrop: boolean;
    designSetting: boolean;
    designDebug: boolean;
    moduleRef: any;
    viewContainerRef: ViewContainerRef;
    constructor(_viewContainerRef: ViewContainerRef, template: TemplateRef<any>, renderer2: Renderer2, lazyloador: LazyLoaderService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private createComponent();
    private setStyle(ele);
    private setDrag(instance);
    private setDrop(instance);
    private etAttribute(classObj, ele?);
}
