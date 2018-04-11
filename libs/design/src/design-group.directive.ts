import {
  Directive,
  Input,
  OnInit,
  ChangeDetectorRef,
  AfterViewInit,
  ViewContainerRef
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LazyLoaderService } from 'iwe7/lazy-load';
import { Iwe7DesignBase } from './iwe7-design';
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
    cd: ChangeDetectorRef,
    public viewRef: ViewContainerRef
  ) {
    super(cd);
  }

  ngAfterViewInit() {
    if (!this.installed) {
      let props$ = this.props.subscribe(res => {
        this.lazyload
          .createComponent('design-group', this.viewRef)
          .subscribe((instance: any) => {
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
