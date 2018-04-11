import {
  Component,
  OnInit,
  Input,
  ChangeDetectorRef,
  ViewContainerRef,
  AfterViewInit
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Iwe7DesignBase } from 'iwe7/design';
import { LazyLoaderService } from '../../..';
@Component({
  selector: 'design-page',
  templateUrl: './design-page.component.html',
  styleUrls: ['./design-page.component.scss']
})
export class DesignPageComponent extends Iwe7DesignBase<any>
  implements OnInit, AfterViewInit {
  viewRef: ViewContainerRef;
  // 页面数据源
  @Input()
  props: BehaviorSubject<BehaviorSubject<any>[]> = new BehaviorSubject([]);
  constructor(
    cd: ChangeDetectorRef,
    public lazyload: LazyLoaderService,
    public view: ViewContainerRef
  ) {
    super(cd);
  }
  onPropsChange(res: BehaviorSubject<any>[]) {
    let i = 0;
  }

  ngAfterViewInit() {
    this.props.subscribe(res => {
      this.view.clear();
      if (this.viewRef) {
        res.map(item => {
          let re = this.lazyload
            .createComponent('design-group', this.viewRef)
            .subscribe((instance: any) => {
              if (instance) {
                instance.setProps(item);
                this.instance = instance;
                re.unsubscribe();
              }
            });
        });
      }
    });
  }

  setViewRef(e: ViewContainerRef) {
    this.viewRef = e;
  }
}
