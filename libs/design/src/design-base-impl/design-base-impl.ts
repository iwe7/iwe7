import {
  NgModule,
  Component,
  ChangeDetectorRef,
  ElementRef,
  Renderer2
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyComponentModuleBase } from 'iwe7/lazy-load';
import { DesignBase } from '../design-base/design-base';

import { BehaviorSubject } from 'rxjs';
import { IcssService } from 'iwe7/icss';
import { LazyLoaderService } from 'iwe7/lazy-load';

@Component({
  selector: 'design-base-impl',
  templateUrl: './design-base-impl.html',
  styleUrls: ['./design-base-impl.scss']
})
export class DesignBaseImpl extends DesignBase<any> {
  constructor(
    cd: ChangeDetectorRef,
    ele: ElementRef,
    icss: IcssService,
    render: Renderer2,
    loader: LazyLoaderService
  ) {
    super(cd, ele, icss, render, loader);
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [DesignBaseImpl],
  entryComponents: [DesignBaseImpl]
})
export class DesignBaseImplModule extends LazyComponentModuleBase {
  getComponentByName(key: string) {
    return DesignBaseImpl;
  }
}
