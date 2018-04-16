import { Renderer2, Injector } from '@angular/core';
export declare class HostClassService {
    injector: Injector;
    private classMap;
    updateHostClass(el: HTMLElement, classMap: object): void;
    private removeClass(el, classMap, renderer);
    private addClass(el, classMap, renderer);
    renderer: Renderer2;
    constructor(injector: Injector);
}
