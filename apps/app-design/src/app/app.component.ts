import {
  Component,
  OnInit,
  ViewContainerRef,
  ChangeDetectorRef
} from '@angular/core';
import { Router } from '@angular/router';
import { data } from './data/data';
import { page } from './data/page';
import { elementAdd } from './data/element-add';

import { MapPipe } from 'iwe7/pipes';
import { LazyLoaderService } from 'iwe7/lazy-load';
import { BehaviorSubject } from 'rxjs';
import { Iwe7Base } from 'iwe7/core';
import { DesignDragDataService } from 'iwe7/design';

import { flatten } from 'underscore';
import { Iwe7ColorsService } from 'iwe7/themes';
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

  _drop: any = {
    selector: 'design-drop-impl',
    style: {
      width: '300px',
      height: '300px',
      [`background-color`]: '#ccc',
      display: 'block',
      margin: '10px auto'
    },
    props: [
      {
        selector: 'design-base-impl',
        style: {
          width: '100px',
          height: '100px',
          [`background-color`]: '#333',
          display: 'inline'
        },
        callback: () => {}
      }
    ]
  };
  _drag: any = {
    selector: 'design-drag-impl',
    style: {
      width: '100px',
      height: '100px',
      [`background-color`]: '#ccc',
      display: 'inline'
    },
    props: [
      {
        selector: 'design-base-impl',
        style: {
          width: '100px',
          height: '100px',
          [`background-color`]: '#333',
          display: 'inline'
        },
        callback: () => {}
      }
    ]
  };
  ngOnInit() {
    this.drag$.next(this._drag);
    this.drop$.next(this._drop);
  }

  viewRef: ViewContainerRef;
  base$: BehaviorSubject<any> = new BehaviorSubject({});
  setViewView(e) {
    this.viewRef = e;
    this.load.load('design-base-impl', this.viewRef, this.base$, res => {});
  }
  settingRef: ViewContainerRef;
  form$: BehaviorSubject<any> = new BehaviorSubject({});
  setSettingView(e) {
    this.settingRef = e;
    this.load.load('design-form-impl', this.settingRef, this.form$, res => {});
  }

  elementsRef: ViewContainerRef;
  elements$: BehaviorSubject<any> = new BehaviorSubject({});
  setElementsView(e) {
    this.settingRef = e;
    this.load.load(
      'design-elements-impl',
      this.settingRef,
      this.form$,
      res => {}
    );
  }

  dragRef: ViewContainerRef;
  drag$: BehaviorSubject<any> = new BehaviorSubject({});
  setDragView(e) {
    this.dragRef = e;
    this.load
      .load('design-drag-impl', this.dragRef, this.drag$, res => {})
      .subscribe(instance => {
        this.__events.subscribe(res => {
          if (res.type === 'droped') {
            let str = flatten(this.dragData.get());
            str.map(res => {
              res[`background-color`] = this.colors.get
              this._drop.props.push(res);
            });
            this.drop$.next(this._drop);
            instance.resetPosition();
          }
        });
      });
    this.load
      .load('design-drag-impl', this.dragRef, this.drag$, res => {})
      .subscribe(instance => {
        this.__events.subscribe(res => {
          if (res.type === 'droped') {
            instance.resetPosition();
          }
        });
      });
    this.load
      .load('design-drag-impl', this.dragRef, this.drag$, res => {})
      .subscribe(instance => {
        this.__events.subscribe(res => {
          if (res.type === 'droped') {
            instance.resetPosition();
          }
        });
      });
    this.load
      .load('design-drag-impl', this.dragRef, this.drag$, res => {})
      .subscribe(instance => {
        this.__events.subscribe(res => {
          if (res.type === 'droped') {
            instance.resetPosition();
          }
        });
      });
    this.load
      .load('design-drag-impl', this.dragRef, this.drag$, res => {})
      .subscribe(instance => {
        this.__events.subscribe(res => {
          if (res.type === 'droped') {
            instance.resetPosition();
          }
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
          type: 'droped'
        });
        instance.resetPosition();
      })
      .subscribe();
  }
}
