import { DefaultDomRenderer2 } from './default-dom-renderer2';
import { EventManager } from './event-manager';
import { DomSharedStylesHost } from './dom-shared-styles-host';
import { RendererType2 } from '@angular/core';
import { flattenStyles, shimContentAttribute, shimHostAttribute } from '../utils/render';
export class EmulatedEncapsulationDomRenderer2 extends DefaultDomRenderer2 {
  private contentAttr: string;
  private hostAttr: string;

  constructor(
    eventManager: EventManager,
    sharedStylesHost: DomSharedStylesHost,
    private component: RendererType2
  ) {
    super(eventManager);
    const styles = flattenStyles(component.id, component.styles, []);
    sharedStylesHost.addStyles(styles);

    this.contentAttr = shimContentAttribute(component.id);
    this.hostAttr = shimHostAttribute(component.id);
  }

  applyToHost(element: any) {
    super.setAttribute(element, this.hostAttr, '');
  }

  createElement(parent: any, name: string): Element {
    const el = super.createElement(parent, name);
    super.setAttribute(el, this.contentAttr, '');
    return el;
  }
}
