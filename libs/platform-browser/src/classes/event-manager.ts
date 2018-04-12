import { Injectable, NgZone, Inject } from '@angular/core';
import { EventManagerPlugin } from './event-manager-plugin';
import { EVENT_MANAGER_PLUGINS } from '../token';
@Injectable()
export class EventManager {
  private _plugins: EventManagerPlugin[];
  private _eventNameToPlugin = new Map<string, EventManagerPlugin>();
  constructor(
    @Inject(EVENT_MANAGER_PLUGINS) plugins: EventManagerPlugin[],
    private _zone: NgZone
  ) {
    plugins.forEach(p => (p.manager = this));
    this._plugins = plugins.slice().reverse();
  }
  addEventListener(
    element: HTMLElement,
    eventName: string,
    handler: Function
  ): Function {
    const plugin = this._findPluginFor(eventName);
    return plugin.addEventListener(element, eventName, handler);
  }

  addGlobalEventListener(
    target: string,
    eventName: string,
    handler: Function
  ): Function {
    const plugin = this._findPluginFor(eventName);
    return plugin.addGlobalEventListener(target, eventName, handler);
  }

  getZone(): NgZone {
    return this._zone;
  }

  /** @internal */
  _findPluginFor(eventName: string): EventManagerPlugin {
    const plugin = this._eventNameToPlugin.get(eventName);
    if (plugin) {
      return plugin;
    }
    const plugins = this._plugins;
    for (let i = 0; i < plugins.length; i++) {
      const plugin = plugins[i];
      if (plugin.supports(eventName)) {
        this._eventNameToPlugin.set(eventName, plugin);
        return plugin;
      }
    }
    throw new Error(`No event manager plugin found for event ${eventName}`);
  }
}
