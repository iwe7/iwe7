import { Injectable } from '@angular/core';

declare const Hammer: any;
import { HammerInstance } from '../interfaces/hammer-intance';

@Injectable()
export class HammerGestureConfig {
  events: string[] = [];

  overrides: { [key: string]: Object } = {};

  options?: {
    cssProps?: any;
    domEvents?: boolean;
    enable?: boolean | ((manager: any) => boolean);
    preset?: any[];
    touchAction?: string;
    recognizers?: any[];
    inputClass?: any;
    inputTarget?: EventTarget;
  };

  buildHammer(element: HTMLElement): HammerInstance {
    const mc = new Hammer(element, this.options);
    mc.get('pinch').set({ enable: true });
    mc.get('rotate').set({ enable: true });
    for (const eventName in this.overrides) {
      mc.get(eventName).set(this.overrides[eventName]);
    }
    return mc;
  }
}
