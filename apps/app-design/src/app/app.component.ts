import {
  Component,
  OnInit,
  ViewContainerRef,
  ChangeDetectorRef
} from '@angular/core';
import { Router } from '@angular/router';
import { data } from './data/data';
import { _drop, _drag } from './data/_drop';
import { elementAdd } from './data/element-add';
import { MapPipe } from 'iwe7/pipes';
import { LazyLoaderService } from 'iwe7/lazy-load';
import { BehaviorSubject } from 'rxjs';
import { Iwe7Base } from 'iwe7/core';
import { DesignDragDataService } from 'iwe7/design';
import { flatten, clone } from 'underscore';
import { Iwe7ColorsService } from 'iwe7/themes/index';
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
    public colors: Iwe7ColorsService
  ) {
    super(cd);
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
  }
  dropRef: ViewContainerRef;
  drop$: BehaviorSubject<any> = new BehaviorSubject({});
  setDropView(e) {
    this.dropRef = e;
    this.load
      .load('design-drop-impl', this.dropRef, this.drop$, (evt, instance) => {
        let { type, data } = evt;
        this.__events.next({
          type: 'droped',
          data: data
        });
        instance.resetPosition();
      })
      .subscribe();
  }
}
