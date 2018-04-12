import { Injectable, Inject, NgZone } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { EventManagerPlugin } from './event-manager-plugin';
import { getDOM } from '../utils/dom';
import { MODIFIER_KEYS, MODIFIER_KEY_GETTERS } from '../token';
@Injectable()
export class KeyEventsPlugin extends EventManagerPlugin {
  constructor(@Inject(DOCUMENT) doc: any) {
    super(doc);
  }
  supports(eventName: string): boolean {
    return KeyEventsPlugin.parseEventName(eventName) != null;
  }
  addEventListener(
    element: HTMLElement,
    eventName: string,
    handler: Function
  ): Function {
    const parsedEvent = KeyEventsPlugin.parseEventName(eventName)!;
    const outsideHandler = KeyEventsPlugin.eventCallback(
      parsedEvent['fullKey'],
      handler,
      this.manager.getZone()
    );
    return this.manager.getZone().runOutsideAngular(() => {
      return getDOM().onAndCancel(
        element,
        parsedEvent['domEventName'],
        outsideHandler
      );
    });
  }
  static parseEventName(eventName: string): { [key: string]: string } | null {
    const parts: string[] = eventName.toLowerCase().split('.');
    const domEventName = parts.shift();
    if (
      parts.length === 0 ||
      !(domEventName === 'keydown' || domEventName === 'keyup')
    ) {
      return null;
    }
    const key = KeyEventsPlugin._normalizeKey(parts.pop()!);
    let fullKey = '';
    MODIFIER_KEYS.forEach(modifierName => {
      const index: number = parts.indexOf(modifierName);
      if (index > -1) {
        parts.splice(index, 1);
        fullKey += modifierName + '.';
      }
    });
    fullKey += key;
    if (parts.length !== 0 || key.length === 0) {
      return null;
    }
    const result: { [k: string]: string } = {};
    result['domEventName'] = domEventName;
    result['fullKey'] = fullKey;
    return result;
  }

  static getEventFullKey(event: KeyboardEvent): string {
    let fullKey = '';
    let key = getDOM().getEventKey(event);
    key = key.toLowerCase();
    if (key === ' ') {
      key = 'space';
    } else if (key === '.') {
      key = 'dot';
    }
    MODIFIER_KEYS.forEach(modifierName => {
      if (modifierName !== key) {
        const modifierGetter = MODIFIER_KEY_GETTERS[modifierName];
        if (modifierGetter(event)) {
          fullKey += modifierName + '.';
        }
      }
    });
    fullKey += key;
    return fullKey;
  }

  static eventCallback(
    fullKey: any,
    handler: Function,
    zone: NgZone
  ): Function {
    return (event: any) => {
      if (KeyEventsPlugin.getEventFullKey(event) === fullKey) {
        zone.runGuarded(() => handler(event));
      }
    };
  }

  static _normalizeKey(keyName: string): string {
    switch (keyName) {
      case 'esc':
        return 'escape';
      default:
        return keyName;
    }
  }
}
