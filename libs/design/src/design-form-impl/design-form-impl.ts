import {
  NgModule,
  Component,
  ChangeDetectorRef,
  ElementRef,
  Renderer2
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyComponentModuleBase } from 'iwe7/lazy-load';
import { DesignForm } from '../design-base/design-form';

import { BehaviorSubject } from 'rxjs';
import { IcssService } from 'iwe7/icss';
import { LazyLoaderService } from 'iwe7/lazy-load';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'design-form-impl',
  templateUrl: './design-form-impl.html',
  styleUrls: ['./design-form-impl.scss']
})
export class DesignFormImpl extends DesignForm<any> {
  constructor(
    cd: ChangeDetectorRef,
    ele: ElementRef,
    icss: IcssService,
    render: Renderer2,
    loader: LazyLoaderService,
    fb: FormBuilder
  ) {
    super(cd, ele, icss, render, loader, fb);
  }

  setView(e) {
    console.log(e);
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [DesignFormImpl],
  entryComponents: [DesignFormImpl]
})
export class DesignFormImplModule extends LazyComponentModuleBase {
  getComponentByName(key: string) {
    return DesignFormImpl;
  }
}
