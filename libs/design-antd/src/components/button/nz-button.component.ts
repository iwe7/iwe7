import {
  AfterContentInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { isEmpty } from '../core/util/check';
import { toBoolean } from '../core/util/convert';

export type NzButtonType = 'primary' | 'dashed' | 'danger';
export type NzButtonShape = 'circle' | null;
export type NzButtonSize = 'small' | 'large' | 'default';
import { Iwe7DesignBase } from 'iwe7/design';

@Component({
  selector: 'button[nz-button]',
  providers: [NzUpdateHostClassService],
  preserveWhitespaces: false,
  template: `
    <i class="anticon anticon-spin anticon-loading" *ngIf="_loading"></i>
    <span (cdkObserveContent)="checkContent()" #contentElement>{{(props|async).text}}</span>
  `,
  styleUrls: ['./style/index.less'],
  encapsulation: ViewEncapsulation.None
})
export class NzButtonComponent extends Iwe7DesignBase<any>
  implements AfterContentInit {
  public _ghost = false;
  public _search = false;
  public _type: NzButtonType;
  public _shape: NzButtonShape;
  public _size: NzButtonSize;
  public _loading = false;
  public el: HTMLElement;
  public iconElement: HTMLElement;
  public iconOnly = false;
  public clicked = false;
  public prefixCls = 'ant-btn';
  public sizeMap = { large: 'lg', small: 'sm' };
  @ViewChild('contentElement') contentElement: ElementRef;

  /** toggle button clicked animation */
  @HostListener('click')
  onClick(): void {
    this.clicked = true;
    this.setClassMap();
    setTimeout(() => {
      this.clicked = false;
      this.setClassMap();
    }, 300);
  }

  updateIconDisplay(value: boolean): void {
    if (this.iconElement) {
      this.renderer.setStyle(
        this.iconElement,
        'display',
        value ? 'none' : 'inline-block'
      );
    }
  }

  /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289 */
  setClassMap(): void {
    const classMap = {
      [`${this.prefixCls}-${this._type}`]: this._type,
      [`${this.prefixCls}-${this._shape}`]: this._shape,
      [`${this.prefixCls}-${this.sizeMap[this._size]}`]: this.sizeMap[
        this._size
      ],
      [`${this.prefixCls}-loading`]: this._loading,
      [`${this.prefixCls}-clicked`]: this.clicked,
      [`${this.prefixCls}-icon-only`]: this.iconOnly,
      [`${this.prefixCls}-background-ghost`]: this._ghost,
      [`ant-input-search-button`]: this._search
    };
    this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
  }

  checkContent(): void {
    this.moveIcon();
    this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
    if (isEmpty(this.contentElement.nativeElement)) {
      this.renderer.setStyle(
        this.contentElement.nativeElement,
        'display',
        'none'
      );
      this.iconOnly = !!this.iconElement;
    } else {
      this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
      this.iconOnly = false;
    }
    this.setClassMap();
    this.updateIconDisplay(this._loading);
    this.cdr.detectChanges();
  }

  moveIcon(): void {
    const firstChildElement = this.findFirstNotEmptyNode(
      this.contentElement.nativeElement
    );
    const lastChildElement = this.findLastNotEmptyNode(
      this.contentElement.nativeElement
    );
    if (firstChildElement && firstChildElement.nodeName === 'I') {
      this.renderer.insertBefore(
        this.el,
        firstChildElement,
        this.contentElement.nativeElement
      );
      this.iconElement = firstChildElement as HTMLElement;
    } else if (lastChildElement && lastChildElement.nodeName === 'I') {
      this.renderer.appendChild(this.el, lastChildElement);
      this.iconElement = lastChildElement as HTMLElement;
    } else {
      this.iconElement = null;
    }
  }

  findFirstNotEmptyNode(value: HTMLElement): Node {
    const children = value.childNodes;
    for (let i = 0; i < children.length; i++) {
      const node = children.item(i);
      if (
        node &&
        node.nodeType === 1 &&
        (node as HTMLElement).outerHTML.toString().trim().length !== 0
      ) {
        return node;
      } else if (
        node &&
        node.nodeType === 3 &&
        node.textContent.toString().trim().length !== 0
      ) {
        return node;
      }
    }
    return null;
  }

  findLastNotEmptyNode(value: HTMLElement): Node {
    const children = value.childNodes;
    for (let i = children.length - 1; i >= 0; i--) {
      const node = children.item(i);
      if (
        node &&
        node.nodeType === 1 &&
        (node as HTMLElement).outerHTML.toString().trim().length !== 0
      ) {
        return node;
      } else if (
        node &&
        node.nodeType === 3 &&
        node.textContent.toString().trim().length !== 0
      ) {
        return node;
      }
    }
    return null;
  }

  constructor(
    private elementRef: ElementRef,
    private cdr: ChangeDetectorRef,
    private renderer: Renderer2,
    private nzUpdateHostClassService: NzUpdateHostClassService
  ) {
    super(cdr);
    this.el = this.elementRef.nativeElement;
    this.renderer.addClass(this.el, this.prefixCls);
  }

  ngAfterContentInit(): void {
    this.checkContent();
  }

  onPropsChange(res: any) {
    let { nzLoading, nzSize, nzGhost, nzType, nzSearch, nzShape } = res;
    if (nzGhost !== this._ghost) {
      this._ghost = toBoolean(nzGhost);
      this.setClassMap();
    }
    if (nzSearch !== this._search) {
      this._search = toBoolean(nzSearch);
      this.setClassMap();
    }
    if (nzType !== this._type) {
      this._type = nzType;
      this.setClassMap();
    }
    if (nzShape !== this._shape) {
      this._shape = nzShape;
      this.setClassMap();
    }
    if (nzSize !== this._size) {
      this._size = nzSize;
      this.setClassMap();
    }
    if (nzLoading !== this._loading) {
      this._loading = toBoolean(nzLoading);
      this.setClassMap();
      this.updateIconDisplay(this._loading);
    }
  }
}
