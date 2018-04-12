import { InjectionToken } from '@angular/core';
import { EventManagerPlugin } from './classes/event-manager-plugin';
export const EVENT_MANAGER_PLUGINS = new InjectionToken<EventManagerPlugin[]>(
  'EventManagerPlugins'
);

export const __symbol__ =
  (typeof Zone !== 'undefined' && (Zone as any)['__symbol__']) ||
  function(v: string): string {
    return '__zone_symbol__' + v;
  };
export const stopSymbol = '__zone_symbol__propagationStopped';
export const stopMethodSymbol = '__zone_symbol__stopImmediatePropagation';
export const ADD_EVENT_LISTENER: 'addEventListener' = __symbol__(
  'addEventListener'
);
export const REMOVE_EVENT_LISTENER: 'removeEventListener' = __symbol__(
  'removeEventListener'
);

export const symbolNames: { [key: string]: string } = {};

export const FALSE = 'FALSE';
export const ANGULAR = 'ANGULAR';
export const NATIVE_ADD_LISTENER = 'addEventListener';
export const NATIVE_REMOVE_LISTENER = 'removeEventListener';

export let blackListedMap: { [eventName: string]: string };

export const MODIFIER_KEYS = ['alt', 'control', 'meta', 'shift'];

export const MODIFIER_KEY_GETTERS: {
  [key: string]: (event: KeyboardEvent) => boolean;
} = {
  alt: (event: KeyboardEvent) => event.altKey,
  control: (event: KeyboardEvent) => event.ctrlKey,
  meta: (event: KeyboardEvent) => event.metaKey,
  shift: (event: KeyboardEvent) => event.shiftKey
};

import { HammerGestureConfig } from './classes/heammer-gestures-config';
export const HAMMER_GESTURE_CONFIG = new InjectionToken<HammerGestureConfig>(
  'HammerGestureConfig'
);


export const EVENT_NAMES = {
  // pan
  pan: true,
  panstart: true,
  panmove: true,
  panend: true,
  pancancel: true,
  panleft: true,
  panright: true,
  panup: true,
  pandown: true,
  // pinch
  pinch: true,
  pinchstart: true,
  pinchmove: true,
  pinchend: true,
  pinchcancel: true,
  pinchin: true,
  pinchout: true,
  // press
  press: true,
  pressup: true,
  // rotate
  rotate: true,
  rotatestart: true,
  rotatemove: true,
  rotateend: true,
  rotatecancel: true,
  // swipe
  swipe: true,
  swipeleft: true,
  swiperight: true,
  swipeup: true,
  swipedown: true,
  // tap
  tap: true
};


export const NAMESPACE_URIS: { [ns: string]: string } = {
  'svg': 'http://www.w3.org/2000/svg',
  'xhtml': 'http://www.w3.org/1999/xhtml',
  'xlink': 'http://www.w3.org/1999/xlink',
  'xml': 'http://www.w3.org/XML/1998/namespace',
  'xmlns': 'http://www.w3.org/2000/xmlns/',
};
