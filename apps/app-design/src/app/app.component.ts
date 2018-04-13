import {
  Component,
  OnInit,
  ViewContainerRef,
  ChangeDetectorRef,
  Injector
} from '@angular/core';
import { Router } from '@angular/router';
import { data } from './data/data';
import { _drop, _drag } from './data/_drop';
import { elementAdd } from './data/element-add';
import { MapPipe } from 'iwe7/pipes';
import { LazyLoaderService } from 'iwe7/lazy-load';
import { BehaviorSubject } from 'rxjs';
import { Iwe7Base, KeyValue } from 'iwe7/core';
import { DesignDragDataService } from 'iwe7/design';
import { flatten, clone } from 'underscore';
import { Iwe7ColorsService } from 'iwe7/themes/index';
import { SortableOptions } from 'iwe7/sortable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends Iwe7Base<any> implements OnInit {
  constructor(
    public router: Router,
    public map: MapPipe,
    public load: LazyLoaderService,
    public cd: ChangeDetectorRef,
    public dragData: DesignDragDataService,
    public colors: Iwe7ColorsService,
    public injector: Injector
  ) {
    super(injector);
  }
  onPropsChange(res: any) {}
  _drop: any = _drop;
  _drag: any = _drag;
  ngOnInit() {
    this.drag$.next(this._drag);
    this.drop$.next(this._drop);
    this.__events.subscribe(res => {
      if (res.type === 'droped' && res.data) {
        let data = this.dragData.get();
        if (data) {
          let str = flatten(data);
          this.dragData.clear();
          str.map(res => {
            let c = JSON.parse(JSON.stringify(res));
            this._drop.props.push(c);
          });
          this.drop$.next(this._drop);
        }
      }
    });
  }
  getDragRandomColor() {
    let c = JSON.parse(JSON.stringify(this._drag));
    c.props.map(res => {
      res.style['background-color'] = this.colors.getRandomColor();
    });
    return c;
  }
  dragRef: ViewContainerRef;
  drag$: BehaviorSubject<any> = new BehaviorSubject({});
  drop$: BehaviorSubject<any> = new BehaviorSubject({});
  setDragView(e) {
    this.dragRef = e;
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(res => {
      this.load
        .load(
          'design-drag-impl',
          this.dragRef,
          this.getDragRandomColor(),
          res => {}
        )
        .subscribe(instance => {
          this.__events.subscribe(res => {
            if (res.type === 'droped' && res.data) {
              instance.resetPosition();
            }
          });
        });
    });
    this.load
      .load('design-drop-impl', this.dragRef, this.drop$, (evt, instance) => {
        let { type, data } = evt;
        this.__events.next({
          type: 'droped',
          data: data
        });
        instance.resetPosition();
      })
      .subscribe();
  }

  setD3View(e) {
    this.load.load('d3-pie', e, {}, () => {}).subscribe();
  }

  setClayView(e) {
    let ele = {
      selector: 'sortable',
      props: []
    };
    [1, 2, 3, 4, 5, 6, 7, 8, 9].map(res => {
      let opt: any = {
        selector: 'design-base-impl',
        style: {
          width: '100px',
          height: '100px',
          [`text-align`]: 'center',
          [`line-height`]: '100px',
          [`background-color`]: this.colors.getRandomColor(),
          color: '#fff'
        },
        text: res + ''
      };
      ele.props.push(opt);
    });
    this.load
      .load('sortable', e, ele, evt => {
        if (evt.type === 'onFinish') {
          ele.props = evt.data;
          // 排序后的完整数据
        }
      })
      .subscribe();
  }
}
