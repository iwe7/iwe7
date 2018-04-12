import {
  Injectable,
  Renderer2,
  RendererFactory2,
  RendererType2,
  ViewEncapsulation
} from '@angular/core';
import { EventManager } from './event-manager';
import { DefaultDomRenderer2 } from './default-dom-renderer2';
import { DomSharedStylesHost } from './dom-shared-styles-host';
import { EmulatedEncapsulationDomRenderer2 } from './emulated-encapsulation-dom-renderer2';
import { flattenStyles } from '../utils/render';
import { ShadowDomRenderer } from './shadow-dom-render';
@Injectable()
export class DomRendererFactory2 implements RendererFactory2 {
  private rendererByCompId = new Map<string, Renderer2>();
  private defaultRenderer: Renderer2;

  constructor(
    private eventManager: EventManager,
    private sharedStylesHost: DomSharedStylesHost
  ) {
    this.defaultRenderer = new DefaultDomRenderer2(eventManager);
  }

  createRenderer(element: any, type: RendererType2 | null): Renderer2 {
    if (!element || !type) {
      return this.defaultRenderer;
    }
    switch (type.encapsulation) {
      case ViewEncapsulation.Emulated: {
        let renderer = this.rendererByCompId.get(type.id);
        if (!renderer) {
          renderer = new EmulatedEncapsulationDomRenderer2(
            this.eventManager,
            this.sharedStylesHost,
            type
          );
          this.rendererByCompId.set(type.id, renderer);
        }
        (<EmulatedEncapsulationDomRenderer2>renderer).applyToHost(element);
        return renderer;
      }
      case ViewEncapsulation.Native:
        return new ShadowDomRenderer(
          this.eventManager,
          this.sharedStylesHost,
          element,
          type
        );
      default: {
        if (!this.rendererByCompId.has(type.id)) {
          const styles = flattenStyles(type.id, type.styles, []);
          this.sharedStylesHost.addStyles(styles);
          this.rendererByCompId.set(type.id, this.defaultRenderer);
        }
        return this.defaultRenderer;
      }
    }
  }

  begin() {}
  end() {}
}
