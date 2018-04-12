import { EventManagerPlugin } from './event-manager-plugin';
import { HammerGestureConfig } from './heammer-gestures-config';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, ɵConsole as Console } from '@angular/core';
import { HAMMER_GESTURE_CONFIG, EVENT_NAMES } from '../token';
@Injectable()
export class HammerGesturesPlugin extends EventManagerPlugin {
  constructor(
    @Inject(DOCUMENT) doc: any,
    @Inject(HAMMER_GESTURE_CONFIG) private _config: HammerGestureConfig,
    private console: Console
  ) {
    super(doc);
  }

  supports(eventName: string): boolean {
    if (
      !EVENT_NAMES.hasOwnProperty(eventName.toLowerCase()) &&
      !this.isCustomEvent(eventName)
    ) {
      return false;
    }
    if (!(window as any).Hammer) {
      this.console.warn(
        `Hammer.js is not loaded, can not bind '${eventName}' event.`
      );
      return false;
    }
    return true;
  }

  addEventListener(
    element: HTMLElement,
    eventName: string,
    handler: Function
  ): Function {
    const zone = this.manager.getZone();
    eventName = eventName.toLowerCase();

    return zone.runOutsideAngular(() => {
      // Creating the manager bind events, must be done outside of angular
      const mc = this._config.buildHammer(element);
      const callback = function(eventObj: any) {
        zone.runGuarded(function() {
          handler(eventObj);
        });
      };
      mc.on(eventName, callback);
      return () => mc.off(eventName, callback);
    });
  }

  isCustomEvent(eventName: string): boolean {
    return this._config.events.indexOf(eventName) > -1;
  }
}
