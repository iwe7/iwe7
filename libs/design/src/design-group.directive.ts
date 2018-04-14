import {
  Directive,
  Input,
  OnInit,
  ChangeDetectorRef,
  AfterViewInit,
  ViewContainerRef,
  Injector
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LazyLoaderService } from 'iwe7/lazy-load';
import { Iwe7DesignBase } from './iwe7-design';
import { CacheMemoryService } from 'iwe7/cache/src/chache-memory.service';
@Directive({
  selector: '[designGroup]'
})
export class DesignGroupDirective extends Iwe7DesignBase<any>
  implements OnInit, AfterViewInit {
  installed: boolean = false;
  @Input()
  set designGroup(val: BehaviorSubject<any>) {
    this.setProps(val);
  }
  constructor(
    public lazyload: LazyLoaderService,
    cd: Injector,
    public viewRef: ViewContainerRef,
    public cache: CacheMemoryService<any>
  ) {
    super(cd);
  }

  ngAfterViewInit() {
    if (!this.installed) {
      let props$ = this.props.subscribe(res => {
        this.lazyload
          .createComponent(
            {
              selector: 'design-group',
              element: null
            },
            this.viewRef,
            this
          )
          .subscribe((item: any) => {
            let { instance } = item;
            if (instance) {
              instance.setProps(this.props);
              this.instance = instance;
              this.installed = true;
              props$.unsubscribe();
            }
          });
      });
    }
  }

  onPropsChange(res: any) {}
}
