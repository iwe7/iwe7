import { EventManager } from './event-manager';
import { getDOM } from '../utils/dom';
export abstract class EventManagerPlugin {
  constructor(private _doc: any) {}
  manager: EventManager;
  abstract supports(eventName: string): boolean;
  abstract addEventListener(
    element: HTMLElement,
    eventName: string,
    handler: Function
  ): Function;
  addGlobalEventListener(
    element: string,
    eventName: string,
    handler: Function
  ): Function {
    const target: HTMLElement = getDOM().getGlobalEventTarget(
      this._doc,
      element
    );
    if (!target) {
      throw new Error(
        `Unsupported event target ${target} for event ${eventName}`
      );
    }
    return this.addEventListener(target, eventName, handler);
  }
}
