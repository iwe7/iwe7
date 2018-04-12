import { Injectable, Inject, NgZone } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { EventManagerPlugin } from './event-manager-plugin';
import {
  stopMethodSymbol,
  stopSymbol,
  ADD_EVENT_LISTENER,
  symbolNames,
  __symbol__,
  FALSE,
  ANGULAR,
  NATIVE_ADD_LISTENER,
  NATIVE_REMOVE_LISTENER,
  REMOVE_EVENT_LISTENER
} from '../token';
import { isBlackListedEvent, globalListener } from '../utils/util';
@Injectable()
export class DomEventsPlugin extends EventManagerPlugin {
  constructor(@Inject(DOCUMENT) doc: any, private ngZone: NgZone) {
    super(doc);
    this.patchEvent();
  }
  private patchEvent() {
    if (!Event || !Event.prototype) {
      return;
    }
    if ((Event.prototype as any)[stopMethodSymbol]) {
      return;
    }
    const delegate = ((Event.prototype as any)[stopMethodSymbol] =
      Event.prototype.stopImmediatePropagation);
    Event.prototype.stopImmediatePropagation = function() {
      if (this) {
        this[stopSymbol] = true;
      }
      delegate && delegate.apply(this, arguments);
    };
  }
  supports(eventName: string): boolean {
    return true;
  }
  addEventListener(
    element: HTMLElement,
    eventName: string,
    handler: Function
  ): Function {
    const self = this;
    const zoneJsLoaded = element[ADD_EVENT_LISTENER];
    let callback: EventListener = handler as EventListener;
    if (
      zoneJsLoaded &&
      (!NgZone.isInAngularZone() || isBlackListedEvent(eventName))
    ) {
      let symbolName = symbolNames[eventName];
      if (!symbolName) {
        symbolName = symbolNames[eventName] = __symbol__(
          ANGULAR + eventName + FALSE
        );
      }
      let taskDatas: TaskData[] = (element as any)[symbolName];
      const globalListenerRegistered = taskDatas && taskDatas.length > 0;
      if (!taskDatas) {
        taskDatas = (element as any)[symbolName] = [];
      }
      const zone = isBlackListedEvent(eventName) ? Zone.root : Zone.current;
      if (taskDatas.length === 0) {
        taskDatas.push({ zone: zone, handler: callback } as TaskData);
      } else {
        let callbackRegistered = false;
        for (let i = 0; i < taskDatas.length; i++) {
          if ((<any>taskDatas[i]).handler === callback) {
            callbackRegistered = true;
            break;
          }
        }
        if (!callbackRegistered) {
          taskDatas.push({ zone: zone, handler: callback } as TaskData);
        }
      }

      if (!globalListenerRegistered) {
        element[ADD_EVENT_LISTENER](eventName, globalListener, false);
      }
    } else {
      element[NATIVE_ADD_LISTENER](eventName, callback, false);
    }
    return () => this.removeEventListener(element, eventName, callback);
  }

  removeEventListener(
    target: any,
    eventName: string,
    callback: Function
  ): void {
    let underlyingRemove = target[REMOVE_EVENT_LISTENER];
    if (!underlyingRemove) {
      return target[NATIVE_REMOVE_LISTENER].apply(target, [
        eventName,
        callback,
        false
      ]);
    }
    let symbolName = symbolNames[eventName];
    let taskDatas: TaskData[] = symbolName && target[symbolName];
    if (!taskDatas) {
      return target[NATIVE_REMOVE_LISTENER].apply(target, [
        eventName,
        callback,
        false
      ]);
    }
    let found = false;
    for (let i = 0; i < taskDatas.length; i++) {
      if ((<any>taskDatas[i]).handler === callback) {
        found = true;
        taskDatas.splice(i, 1);
        break;
      }
    }
    if (found) {
      if (taskDatas.length === 0) {
        underlyingRemove.apply(target, [eventName, globalListener, false]);
      }
    } else {
      target[NATIVE_REMOVE_LISTENER].apply(target, [
        eventName,
        callback,
        false
      ]);
    }
  }
}
