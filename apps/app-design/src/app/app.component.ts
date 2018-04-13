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
  items: any = data;
  page: any = page;
  _addElement: any = elementAdd;
  addElement$: BehaviorSubject<any> = new BehaviorSubject(this._addElement);
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
    let items = this.map.transform(this.items);
    this.addElement$.subscribe(res => {
    });
  }

  go(item: any, key: string) {
    this.router.navigate(['/'], {
      queryParams: {
        t: key
      }
    });
  }

  addPage() {
    this.load.load(
      'design-elements-add',
      this.dialogRef,
      this.addElement$,
      res => {
        if (res.type === 'close') {
          this.dialogRef.clear();
        }
        if (res.type === 'header') {
          this._addElement.list.map(item => {
            item.active = false;
            if (item.code === res.data.code) {
              item.active = true;
            }
          });
          this.addElement$.next(this._addElement);
        }
      }
    );
  }
  dialogRef: ViewContainerRef;
  setDialogView(e) {
    this.dialogRef = e;
  }
}
