import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  Injector,
  HostBinding
} from '@angular/core';
import { NzUpdateHostClassService } from 'iwe7/core';
import { DesignBase } from 'iwe7/design';
@Component({
  selector: '[nz-form]',
  template: `<ng-content></ng-content><ng-container (getViewRef)="setViewRef($event)"></ng-container>`,
  providers: [NzUpdateHostClassService]
})
export class NzFormDirective extends DesignBase<any> implements OnInit {
  el: HTMLElement;
  prefixCls = 'ant-form';
  private _layout = 'horizontal';

  @Input()
  set nzLayout(value: string) {
    this._layout = value;
    this.setClassMap();
  }

  get nzLayout(): string {
    return this._layout;
  }

  setClassMap(): void {
    const classMap = {
      [`${this.prefixCls}`]: true,
      [`${this.prefixCls}-${this.nzLayout}`]: this.nzLayout
    };
    this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
  }

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private nzUpdateHostClassService: NzUpdateHostClassService,
    injector: Injector
  ) {
    super(injector);
    this.el = this.elementRef.nativeElement;
  }

  onPropsChange(e: any) {
    if ('nzLayout' in e) {
      this.nzLayout = e['nzLayout'];
    }
    super.onPropsChange(e);
  }

  ngOnInit(): void {
    this.setClassMap();
  }
}
