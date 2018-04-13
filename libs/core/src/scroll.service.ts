import { DOCUMENT } from '@angular/common';
import {
  Inject,
  Injectable,
  Optional,
  Provider,
  SkipSelf
} from '@angular/core';

import { reqAnimFrame } from './functions/request-animation';

export type EasyingFn = (t: number, b: number, c: number, d: number) => number;

function easeInOutCubic(t: number, b: number, c: number, d: number): number {
  const cc = c - b;
  let tt = t / (d / 2);
  if (tt < 1) {
    return cc / 2 * tt * tt * tt + b;
  } else {
    return cc / 2 * ((tt -= 2) * tt * tt + 2) + b;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private doc: Document;
  constructor(@Inject(DOCUMENT) doc: any) {
    this.doc = doc;
  }
  setScrollTop(el: Element | Window, topValue: number = 0): void {
    if (el === window) {
      this.doc.body.scrollTop = topValue;
      this.doc.documentElement.scrollTop = topValue;
    } else {
      (el as Element).scrollTop = topValue;
    }
  }
  getOffset(el: Element): { top: number; left: number } {
    const ret = {
      top: 0,
      left: 0
    };
    if (!el || !el.getClientRects().length) return ret;
    const rect = el.getBoundingClientRect();
    if (rect.width || rect.height) {
      const doc = el.ownerDocument.documentElement;
      ret.top = rect.top - doc.clientTop;
      ret.left = rect.left - doc.clientLeft;
    } else {
      ret.top = rect.top;
      ret.left = rect.left;
    }
    return ret;
  }

  getScroll(el?: Element | Window, top: boolean = true): number {
    const target = el ? el : window;
    const prop = top ? 'pageYOffset' : 'pageXOffset';
    const method = top ? 'scrollTop' : 'scrollLeft';
    const isWindow = target === window;
    let ret = isWindow ? target[prop] : target[method];
    if (isWindow && typeof ret !== 'number') {
      ret = this.doc.documentElement[method];
    }
    return ret;
  }
  scrollTo(
    containerEl: Element | Window,
    targetTopValue: number = 0,
    easing?: EasyingFn,
    callback?: () => void
  ): void {
    const target = containerEl ? containerEl : window;
    const scrollTop = this.getScroll(target);
    const startTime = Date.now();
    const frameFunc = () => {
      const timestamp = Date.now();
      const time = timestamp - startTime;
      this.setScrollTop(
        target,
        (easing || easeInOutCubic)(time, scrollTop, targetTopValue, 450)
      );
      if (time < 450) {
        reqAnimFrame(frameFunc);
      } else {
        if (callback) callback();
      }
    };
    reqAnimFrame(frameFunc);
  }
}
