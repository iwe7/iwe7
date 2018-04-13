/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * The goal here is to make sure that the browser DOM API is the Renderer.
 * We do this by defining a subset of DOM API to be the renderer and than
 * use that time for rendering.
 *
 * At runtime we can than use the DOM api directly, in server or web-worker
 * it will be easy to implement such API.
 */

import { ViewEncapsulation, RendererStyleFlags2, RendererType2 } from '@angular/core';

export enum RendererStyleFlags3 {
  Important = 1 << 0,
  DashCase = 1 << 1
}

export type Renderer3 = ObjectOrientedRenderer3 | ProceduralRenderer3;
export interface ObjectOrientedRenderer3 {
  createElement(tagName: string): RElement;
  createTextNode(data: string): RText;
  querySelector(selectors: string): RElement | null;
}
export function isProceduralRenderer(
  renderer: ProceduralRenderer3 | ObjectOrientedRenderer3
): renderer is ProceduralRenderer3 {
  return !!(renderer as any).listen;
}

/**
 * Procedural style of API needed to create elements and text nodes.
 *
 * In non-native browser environments (e.g. platforms such as web-workers), this is the
 * facade that enables element manipulation. This also facilitates backwards compatibility
 * with Renderer2.
 */
export interface ProceduralRenderer3 {
  destroy(): void;
  createElement(name: string, namespace?: string | null): RElement;
  createText(value: string): RText;
  destroyNode?: ((node: RNode) => void) | null;
  appendChild(parent: RElement, newChild: RNode): void;
  insertBefore(parent: RNode, newChild: RNode, refChild: RNode | null): void;
  removeChild(parent: RElement, oldChild: RNode): void;
  selectRootElement(selectorOrNode: string | any): RElement;
  setAttribute(
    el: RElement,
    name: string,
    value: string,
    namespace?: string | null
  ): void;
  removeAttribute(el: RElement, name: string, namespace?: string | null): void;
  addClass(el: RElement, name: string): void;
  removeClass(el: RElement, name: string): void;
  setStyle(
    el: RElement,
    style: string,
    value: any,
    flags?: RendererStyleFlags2 | RendererStyleFlags3
  ): void;
  removeStyle(
    el: RElement,
    style: string,
    flags?: RendererStyleFlags2 | RendererStyleFlags3
  ): void;
  setProperty(el: RElement, name: string, value: any): void;
  setValue(node: RText, value: string): void;
  listen(
    target: RNode,
    eventName: string,
    callback: (event: any) => boolean | void
  ): () => void;
}

export interface RendererFactory3 {
  createRenderer(
    hostElement: RElement | null,
    rendererType: RendererType2 | null
  ): Renderer3;
  begin?(): void;
  end?(): void;
}

export const domRendererFactory3: RendererFactory3 = {
  createRenderer: (
    hostElement: RElement | null,
    rendererType: RendererType2 | null
  ): Renderer3 => {
    return document;
  }
};

export interface RNode {
  removeChild(oldChild: RNode): void;
  insertBefore(
    newChild: RNode,
    refChild: RNode | null,
    isViewRoot: boolean
  ): void;
  appendChild(newChild: RNode): RNode;
}
export interface RElement extends RNode {
  style: RCssStyleDeclaration;
  classList: RDomTokenList;
  className: string;
  setAttribute(name: string, value: string): void;
  removeAttribute(name: string): void;
  setAttributeNS(
    namespaceURI: string,
    qualifiedName: string,
    value: string
  ): void;
  addEventListener(
    type: string,
    listener: EventListener,
    useCapture?: boolean
  ): void;
  removeEventListener(
    type: string,
    listener?: EventListener,
    options?: boolean
  ): void;
  setProperty?(name: string, value: any): void;
}

export interface RCssStyleDeclaration {
  removeProperty(propertyName: string): string;
  setProperty(
    propertyName: string,
    value: string | null,
    priority?: string
  ): void;
}

export interface RDomTokenList {
  add(token: string): void;
  remove(token: string): void;
}

export interface RText extends RNode {
  textContent: string | null;
}

// Note: This hack is necessary so we don't erroneously get a circular dependency
// failure based on types.
export const unusedValueExportToPlacateAjd = 1;
