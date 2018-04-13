import {
  NgModule,
  Component,
  ChangeDetectorRef,
  ElementRef,
  Renderer2,
  OnInit
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyComponentModuleBase } from 'iwe7/lazy-load';
import { DesignBase } from '../design-base/design-base';

import { IcssService } from 'iwe7/icss';
import { LazyLoaderService } from 'iwe7/lazy-load';

import { BehaviorSubject, fromEvent } from 'rxjs';
import {
  map,
  tap,
  takeUntil,
  skipUntil,
  switchMap,
  mergeMap,
  concatMap
} from 'rxjs/operators';

@Component({
  selector: 'design-drop-impl',
  templateUrl: './design-drop-impl.html',
  styleUrls: ['./design-drop-impl.scss']
})
export class DesignDropImpl extends DesignBase<any> implements OnInit {
  constructor(
    cd: ChangeDetectorRef,
    ele: ElementRef,
    icss: IcssService,
    render: Renderer2,
    loader: LazyLoaderService
  ) {
    super(cd, ele, icss, render, loader);
  }

  ngOnInit() {
    const mouseover = fromEvent(this.ele.nativeElement, 'mouseover');
    const mousemove = fromEvent(document, 'mousemove');
    const mousedown = fromEvent(this.ele.nativeElement, 'mousedown');
    const mouseup = fromEvent(document, 'mouseup');

    mouseover
      .pipe(
        // 调试
        tap(res => console.log('i am in'))
      )
      .subscribe();
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [DesignDropImpl],
  entryComponents: [DesignDropImpl]
})
export class DesignDropImplModule extends LazyComponentModuleBase {
  getComponentByName(key: string) {
    return DesignDropImpl;
  }
}
