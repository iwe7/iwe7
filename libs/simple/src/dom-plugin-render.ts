import {
  Renderer2,
  RendererType2,
  RendererStyleFlags2,
  RendererFactory2
} from '@angular/core';
export class DomPluginRendererFactory implements RendererFactory2 {
  createRenderer(hostElement: Node, type: RendererType2): Renderer2 {
    return new DomPluginRenderer(hostElement, type);
  }
}
export class DomPluginRenderer implements Renderer2 {
  data: { [p: string]: any };
  destroyNode: ((node: any) => void) | any;
  constructor(hostElement: Node, type: RendererType2) {}
  destroy(): void {}
  createElement(name: string, namespace?: string | any): HTMLElement {
    return document.createElement(name);
  }
  createComment(value: string): Comment {
    return document.createComment(value);
  }
  createText(value: string): Text {
    return document.createTextNode(value);
  }
  appendChild(parent: Node, newChild: Node): void {
    parent.appendChild(newChild);
  }
  insertBefore(parent: Node, newChild: Node, refChild: Node): void {
    parent.insertBefore(newChild, refChild);
  }
  removeChild(parent: Node, oldChild: Node): void {
    parent.removeChild(oldChild);
  }
  selectRootElement(selectorOrNode: string | Element): Element | null {
    if (typeof selectorOrNode === 'string') {
      return document.querySelector(selectorOrNode);
    } else {
      return selectorOrNode;
    }
  }
  parentNode(node: Node): Node | null {
    return node.parentNode;
  }
  nextSibling(node: Node): Node | null {
    return node.nextSibling;
  }
  setAttribute(
    el: HTMLElement,
    name: string,
    value: string,
    namespace?: string | any
  ): void {
    el.setAttribute(name, value);
  }
  removeAttribute(
    el: HTMLElement,
    name: string,
    namespace?: string | any
  ): void {
    el.removeAttribute(name);
  }
  addClass(el: HTMLElement, name: string): void {
    el.classList.add(name);
  }
  removeClass(el: HTMLElement, name: string): void {
    el.classList.remove(name);
  }
  setStyle(
    el: HTMLElement,
    style: string,
    value: any,
    flags: RendererStyleFlags2
  ): void {
    if (flags & RendererStyleFlags2.DashCase) {
      el.style.setProperty(
        style,
        value,
        !!(flags & RendererStyleFlags2.Important) ? 'important' : ''
      );
    } else {
      (el.style as any)[style] = value;
    }
  }
  removeStyle(
    el: HTMLElement,
    style: string,
    flags: RendererStyleFlags2
  ): void {
    if (flags & RendererStyleFlags2.DashCase) {
      el.style.removeProperty(style);
    } else {
      (el.style as any)[style] = '';
    }
  }
  setProperty(el: HTMLElement, name: string, value: any): void {
    (el as any)[name] = value;
  }

  setValue(node: Node, value: string): void {
    node.nodeValue = value;
  }
  listen(
    target: HTMLElement,
    eventName: string,
    callback: (event: any) => boolean | void
  ): () => void {
    const parts: string[] = eventName.toLowerCase().split('.');
    const domEventName = parts.shift();
    let eventCallback = callback;
    let eventNameToListen = eventName;
    if (
      parts.length !== 0 &&
      (domEventName === 'keydown' || domEventName === 'keyup')
    ) {
      eventNameToListen = domEventName;
      const key = parts[0];
      eventCallback = (event: KeyboardEvent) => {
        if (event.key.toLowerCase() === key) {
          callback(event);
        }
      };
    }
    const decoratedCallback = decoratePreventDefault(eventCallback) as any;
    target.addEventListener(eventNameToListen, decoratedCallback);
    return () => target.removeEventListener(eventName, decoratedCallback);
  }
}

function decoratePreventDefault(eventHandler: Function): Function {
  return (event: any) => {
    const allowDefaultBehavior = eventHandler(event);
    if (allowDefaultBehavior === false) {
      // TODO(tbosch): move preventDefault into event plugins...
      event.preventDefault();
      event.returnValue = false;
    }
  };
}
