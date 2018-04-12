import { DefaultDomRenderer2 } from './default-dom-renderer2';
import { EventManager } from './event-manager';
import { DomSharedStylesHost } from './dom-shared-styles-host';
import { RendererType2 } from '@angular/core';
import { flattenStyles } from '../utils/render';
export class ShadowDomRenderer extends DefaultDomRenderer2 {
  private shadowRoot: any;

  constructor(
    eventManager: EventManager,
    private sharedStylesHost: DomSharedStylesHost,
    private hostEl: any,
    private component: RendererType2
  ) {
    super(eventManager);
    this.shadowRoot = (hostEl as any).createShadowRoot();
    this.sharedStylesHost.addHost(this.shadowRoot);
    const styles = flattenStyles(component.id, component.styles, []);
    for (let i = 0; i < styles.length; i++) {
      const styleEl = document.createElement('style');
      styleEl.textContent = styles[i];
      this.shadowRoot.appendChild(styleEl);
    }
  }

  private nodeOrShadowRoot(node: any): any {
    return node === this.hostEl ? this.shadowRoot : node;
  }

  destroy() {
    this.sharedStylesHost.removeHost(this.shadowRoot);
  }

  appendChild(parent: any, newChild: any): void {
    return super.appendChild(this.nodeOrShadowRoot(parent), newChild);
  }
  insertBefore(parent: any, newChild: any, refChild: any): void {
    return super.insertBefore(
      this.nodeOrShadowRoot(parent),
      newChild,
      refChild
    );
  }
  removeChild(parent: any, oldChild: any): void {
    return super.removeChild(this.nodeOrShadowRoot(parent), oldChild);
  }
  parentNode(node: any): any {
    return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(node)));
  }
}
