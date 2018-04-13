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
  Injector
} from '@angular/core';
const OriginalSortable: any = require('sortablejs');
const Sortable = require('sortablejs');
import { DesignBase, DesignBaseProps } from 'iwe7/design';
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
import { IcssService } from 'iwe7/icss';
import { LazyLoaderService } from 'iwe7/lazy-load';

@Component({
  selector: 'sortable',
  templateUrl: './sortable.component.html',
  styleUrls: ['./sortable.component.scss']
})
export class SortableComponent extends DesignBase<SortableOptions>
  implements OnInit, AfterViewInit {
  constructor(injector: Injector) {
    super(injector);
  }

  private eventsNext(type, data) {
    this.__events.next({
      type: type,
      data: data
    });
  }
  ngAfterViewInit() {
    this.props.subscribe((res: SortableOptions) => {
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
        res[key] = data => {
          this.eventsNext(key, data);
        };
      });
      const sortable = Sortable.create(this.ele.nativeElement, res);
      this.__events.subscribe(res => {
        if (res.type === 'onEnd') {
          let arr = sortable.toArray();
          let props = [];
          arr.map(key => {
            let item = this.memory.get(key);
            props.push(item);
          });
          // 数据排序
          this._props.props = props;
          console.log('onfinish', this._props);
          this.eventsNext('onFinish', this._props);
          this.props.next(this._props);
        }
      });
    });
  }
}
