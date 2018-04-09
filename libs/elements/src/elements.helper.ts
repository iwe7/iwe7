import {
  createCustomElement,
  NgElementStrategyFactory
} from '@angular/elements';
import { Injector, Type } from '@angular/core';
import { TestElementsComponent } from 'iwe7/elements/src/test-elements/test-elements.component';

export function registerElement(
  res: { key: string; component: Type<any> },
  injector: Injector
) {
  const NgElementCtor = createCustomElement(res.component, {
    injector: injector
  });
  customElements.define('hello-world', NgElementCtor);
}

export function registerElements(
  components: { key: string; component: Type<any> }[],
  injector: Injector
) {
  components.map(res => {
    registerElement(res, injector);
  });
}
