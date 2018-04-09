import {
  Directive,
  Input,
  OnChanges,
  ViewContainerRef,
  TemplateRef,
  ComponentFactoryResolver,
  ComponentFactory,
  SimpleChanges,
  Renderer2,
  OnInit
} from '@angular/core';
import * as _ from 'underscore';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { Iwe7DesignBase } from './iwe7-design';
import { LazyLoaderService } from 'iwe7/lazy-load';
/**
 *design="name;class 'class';style 'style';drag true; drop true;"
 */
export const instanceMap: Map<string, any> = new Map();

@Directive({
  selector:
    '[iwe7Design],[design],[designClass],[designStyle],[designDrag],[designDrop],[designInstance]'
})
export class Iwe7DesignDirective implements OnChanges, OnInit {
  @Input() design: any;
  @Input() designClass: { [key: string]: boolean };
  @Input() designStyle: { [key: string]: string };
  @Input() designDrag: boolean;
  @Input() designDrop: boolean;
  @Input() designSetting: boolean = false;
  @Input() designDebug: boolean = false;

  moduleRef: any;
  viewContainerRef: ViewContainerRef;

  constructor(
    private _viewContainerRef: ViewContainerRef,
    private template: TemplateRef<any>,
    private renderer2: Renderer2,
    private lazyloador: LazyLoaderService
  ) {
    this.viewContainerRef = _viewContainerRef;
  }

  ngOnInit() {
    if (this.designDebug) {
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('design' in changes) {
      this.createComponent();
    }
  }

  private createComponent() {
    this.viewContainerRef.clear();
    let name = this.design.name || null;
    this.lazyloador.create(name, this._viewContainerRef).subscribe(res => {});
  }

  private setStyle(ele: any) {
    _.map(this.design.style, (s, key) => {
      this.renderer2.setStyle(ele, '' + key, s);
    });
  }

  private setDrag(instance: any) {
    let ele = instance.ele.nativeElement;
    this.etAttribute(
      {
        draggable: true
      },
      ele
    );
    let uuid: string;
    fromEvent(ele, 'dragstart').subscribe((ev: DragEvent) => {
      uuid = instance.id;
      ev.dataTransfer.setData('name', 'guid_' + instance.guid);
      ev.stopPropagation();
    });
    fromEvent(ele, 'dragend').subscribe((ev: DragEvent) => {
      // dragend 删除这一个
      // this.history.removeComponentByUuid(uuid);
      console.log(ele);
    });
  }

  private setDrop(instance: any) {
    const ele = instance.ele.nativeElement;
    fromEvent(ele, 'drop').subscribe((ev: DragEvent) => {});
  }

  private etAttribute(classObj: { [key: string]: any }, ele?: HTMLElement) {
    if (!ele) {
      return '';
    }
    for (const key in classObj) {
      if (typeof classObj[key] === 'boolean') {
        if (classObj[key]) {
          this.renderer2.setAttribute(ele, key, 'true');
        } else {
          this.renderer2.removeAttribute(ele, key);
        }
      } else {
        this.renderer2.setAttribute(ele, key, classObj[key]);
      }
    }
  }
}
