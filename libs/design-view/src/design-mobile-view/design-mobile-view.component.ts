import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ViewContainerRef,
  ɵisObservable,
  ɵisPromise,
  Input,
  AfterViewInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import { Iwe7DesignBase } from 'iwe7/design';
import { BehaviorSubject, from } from 'rxjs';
import { Title, Meta } from '@angular/platform-browser';
import { map } from 'underscore';
import { LazyLoaderService } from '../../..';

@Component({
  selector: 'design-mobile-view',
  templateUrl: './design-mobile-view.component.html',
  styleUrls: ['./design-mobile-view.component.scss']
})
export class DesignMobileViewComponent extends Iwe7DesignBase<any>
  implements OnInit, AfterViewInit {
  @Input() app: any;
  @ViewChild('loading') loading: ElementRef;

  _loading: any = {
    display: 'flex'
  };
  loading$: BehaviorSubject<any> = new BehaviorSubject(this._loading);

  _innerViewRef: ViewContainerRef;
  constructor(
    cd: ChangeDetectorRef,
    public view: ViewContainerRef,
    public title: Title,
    public lazy: LazyLoaderService,
    public meta: Meta
  ) {
    super(cd);
  }

  onPropsChange(res: any) {
    // 新建试图
    if (this._innerViewRef) {
      if (Object.keys(res).length === 0) {
        console.log('loading');
        this._loading.dispatch = 'flex';
        this.loading$.next(this._loading);
      } else {
        console.log('complier starting');
        res.map(item => {
          this.lazy
            .createComponent(
              {
                selector: item.selector,
                element: null
              },
              this._innerViewRef,
              this
            )
            .subscribe(res => {
              console.log(res, item);
              res.setProps(new BehaviorSubject(item));
            });
        });
      }
    }
  }

  ngAfterViewInit() {
    let { title, props } = this.app;
    this.title.setTitle(title);
    // 传过来的是json数据
    this.props.next(props);
  }

  setViewRef(e: any) {
    this._innerViewRef = e;
  }
}
