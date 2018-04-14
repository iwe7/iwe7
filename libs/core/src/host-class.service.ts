import { Injectable, Renderer2, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HostClassService {
  private classMap = {};

  updateHostClass(el: HTMLElement, classMap: object): void {
    this.renderer = this.injector.get(Renderer2, null);
    if (this.renderer) {
      this.removeClass(el, this.classMap, this.renderer);
      this.classMap = { ...classMap };
      this.addClass(el, this.classMap, this.renderer);
    }
  }

  private removeClass(
    el: HTMLElement,
    classMap: object,
    renderer: Renderer2
  ): void {
    for (const i in classMap) {
      if (classMap.hasOwnProperty(i)) {
        renderer.removeClass(el, i);
      }
    }
  }

  private addClass(
    el: HTMLElement,
    classMap: object,
    renderer: Renderer2
  ): void {
    for (const i in classMap) {
      if (classMap.hasOwnProperty(i)) {
        if (classMap[i]) {
          renderer.addClass(el, i);
        }
      }
    }
  }
  renderer: Renderer2;
  constructor(public injector: Injector) {}
}
