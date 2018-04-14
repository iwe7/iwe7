import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
  EventEmitter,
  Output,
  AfterViewInit,
  Renderer2,
  Injector,
  Directive
} from '@angular/core';
const OriginalSortable: any = require('sortablejs');
const Sortable = require('sortablejs');

import { DesignBase, DesignBaseProps } from 'iwe7/design';
import { IcssService } from 'iwe7/icss';
import { LazyLoaderService } from 'iwe7/lazy-load';

export interface SortableOptions extends DesignBaseProps {
  group?: any;
  sort?: boolean;
  delay?: number;
  disabled?: boolean;
  store?: {
    get: (sortable: Sortable) => any[];
    set: (sortable: Sortable) => any;
  };
  animation?: number;
  handle?: string;
  filter?: any;
  draggable?: string;
  ghostClass?: string;
  chosenClass?: string;
  dataIdAttr?: string;
  forceFallback?: boolean;
  fallbackClass?: string;
  fallbackOnBody?: boolean;
  scroll?: boolean;
  scrollSensitivity?: number;
  scrollSpeed?: number;
  text?: string;
  setData?: (dataTransfer: any, draggedElement: any) => any;
  onStart?: (event: any) => any;
  onEnd?: (event: any) => any;
  onAdd?: (event: any) => any;
  onUpdate?: (event: any) => any;
  onSort?: (event: any) => any;
  onRemove?: (event: any) => any;
  onFilter?: (event: any) => any;
  onMove?: (event: any) => boolean;
}

@Component({
  selector: 'sortable',
  templateUrl: './sortable.component.html',
  styleUrls: ['./sortable.component.scss']
})
export class SortableComponent extends DesignBase<SortableOptions>
  implements OnInit, AfterViewInit {
  private sortable: any;
  private options: any;
  constructor(injector: Injector) {
    super(injector);
  }

  private eventsNext(type, data) {
    this.__events.next({
      type: type,
      data: data
    });
  }

  getSortable() {
    return this.sortable;
  }

  updateSortable() {
    if (this.sortable) {
      this.sortable.destroy();
    }
    this.createSortable();
  }

  private createOptions() {
    [
      'onMove',
      'onRemove',
      'onUpdate',
      'onStart',
      'onFilter',
      'onAdd',
      'onEnd',
      'onSort'
    ].map(key => {
      this.options[key] = data => {
        this.eventsNext(key, data);
      };
    });
  }

  private createSortable() {
    this.sortable = Sortable.create(this.ele.nativeElement, this.options);
    this.__addSub(
      this.__events.subscribe(res => {
        if (res.type === 'onEnd') {
          let arr = this.sortable.toArray();
          let props = [];
          arr.map(key => {
            let item = this.memory.get(key);
            props.push(item);
          });
          // 内部排序 数据排序
          this._props.props = props;
          this.eventsNext('onFinish', this._props);
        }
      })
    );
  }
  ngAfterViewInit() {
    this.props.subscribe((res: SortableOptions) => {
      this.options = res;
      this.createOptions();
      this.updateSortable();
    });
  }
}
@Directive({
  selector: '[sortable]'
})
export class SortableDirective extends SortableComponent {
  constructor(injector: Injector) {
    super(injector);
  }
}
