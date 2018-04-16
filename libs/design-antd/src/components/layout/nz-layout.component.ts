import { Component, Injector, HostBinding, Input } from '@angular/core';
import { DesignBase } from 'iwe7/design';

@Component({
  selector: 'nz-layout',
  preserveWhitespaces: false,
  template: `
    <ng-content></ng-content>
    <nz-header *ngIf="hasHeader">
      <ng-container (getViewRef)="setHeaderRef($event)"></ng-container>
    </nz-header>
    <nz-content [scroll]="allowScroll" [direction]="direction">
      <ng-container (getViewRef)="setViewRef($event)"></ng-container>
    </nz-content>
    <nz-footer *ngIf="hasFooter">
      <ng-container (getViewRef)="setFooterRef($event)"></ng-container>
    </nz-footer>
  `,
  host: {
    '[class.ant-layout]': 'true',
    '[class.ant-layout-has-sider]': 'hasSider'
  },
  styleUrls: ['./nz-layout.component.scss']
})
export class NzLayoutComponent extends DesignBase<any> {
  hasSider = false;
  @Input()
  @HostBinding('style.background-color')
  backgroundColor: string;

  @Input()
  @HostBinding('style.width.vw')
  width: string;

  @Input()
  @HostBinding('style.height.vh')
  height: string;

  @Input() allowScroll: boolean;

  hasHeader: boolean = false;
  hasFooter: boolean = false;

  direction: string;

  constructor(injector: Injector) {
    super(injector);
  }
  onPropsChange(e) {
    if ('backgroundColor' in e) {
      this.backgroundColor = e['backgroundColor'];
    }
    if ('width' in e) {
      this.width = e['width'];
    }
    if ('height' in e) {
      this.height = e['height'];
    }
    if ('allowScroll' in e) {
      this.allowScroll = e['allowScroll'];
    }
    if ('direction' in e) {
      this.direction = e['direction'];
    }
    if ('hasHeader' in e) {
      this.hasHeader = e['hasHeader'];
    }
    if ('hasFooter' in e) {
      this.hasFooter = e['hasFooter'];
    }
    super.onPropsChange(e);
  }

  setHeaderRef(e) {}

  setFooterRef(e) {}
}
