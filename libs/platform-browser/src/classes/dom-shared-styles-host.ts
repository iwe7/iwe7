import { Injectable, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { getDOM } from '../utils/dom';
import { SharedStylesHost } from './shared-styles-host';
@Injectable()
export class DomSharedStylesHost extends SharedStylesHost implements OnDestroy {
  private _hostNodes = new Set<Node>();
  private _styleNodes = new Set<Node>();
  constructor(@Inject(DOCUMENT) private _doc: any) {
    super();
    this._hostNodes.add(_doc.head);
  }

  private _addStylesToHost(styles: Set<string>, host: Node): void {
    styles.forEach((style: string) => {
      const styleEl = this._doc.createElement('style');
      styleEl.textContent = style;
      this._styleNodes.add(host.appendChild(styleEl));
    });
  }

  addHost(hostNode: Node): void {
    this._addStylesToHost(this._stylesSet, hostNode);
    this._hostNodes.add(hostNode);
  }

  removeHost(hostNode: Node): void {
    this._hostNodes.delete(hostNode);
  }

  onStylesAdded(additions: Set<string>): void {
    this._hostNodes.forEach(hostNode =>
      this._addStylesToHost(additions, hostNode)
    );
  }

  ngOnDestroy(): void {
    this._styleNodes.forEach(styleNode => getDOM().remove(styleNode));
  }
}
