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
    public cd: ChangeDetectorRef
  ) {
    super(cd);
  }

  onPropsChange(res: any) {}

  ngOnInit() {
    this.drag$.next({
      style: {
        width: '100px',
        height: '100px',
        [`background-color`]: 'red',
        display: 'inline'
      }
    });

    this.drop$.next({
      style: {
        width: '100px',
        height: '100px',
        [`background-color`]: 'green',
        display: 'inline'
      }
    });
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
    this.load.load('design-drag-impl', this.dragRef, this.drag$, res => {});
  }

  dropRef: ViewContainerRef;
  drop$: BehaviorSubject<any> = new BehaviorSubject({});
  setDropView(e) {
    this.dropRef = e;
    this.load.load('design-drop-impl', this.dropRef, this.drop$, res => {});
  }
}
