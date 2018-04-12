import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { I18nModule as NzI18nModule } from 'iwe7/i18n';
import { NzOptionContainerComponent } from './nz-option-container.component';
import { NzOptionGroupComponent } from './nz-option-group.component';
import { NzOptionLiComponent } from './nz-option-li.component';
import { NzOptionComponent } from './nz-option.component';
import { NzOptionPipe, NzSubOptionPipe } from './nz-option.pipe';
import { NzSelectTopControlComponent } from './nz-select-top-control.component';
import { NzSelectUnselectableDirective } from './nz-select-unselectable.directive';
import { NzSelectComponent } from './nz-select.component';
import { LazyComponentModuleBase } from 'iwe7/lazy-load';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OverlayModule,
    NzI18nModule,
    RouterModule.forChild([
      {
        path: 'nz-option',
        component: NzOptionComponent
      },
      {
        path: 'nz-select',
        component: NzSelectComponent
      },
      {
        path: 'ng-option-container',
        component: NzOptionContainerComponent
      },
      {
        path: 'nz-option-group',
        component: NzOptionGroupComponent
      },
      {
        path: 'nz-select-top-control',
        component: NzSelectTopControlComponent
      }
    ])
  ],
  declarations: [
    NzOptionPipe,
    NzSubOptionPipe,
    NzOptionComponent,
    NzSelectComponent,
    NzOptionContainerComponent,
    NzOptionGroupComponent,
    NzOptionLiComponent,
    NzSelectTopControlComponent,
    NzSelectUnselectableDirective
  ],
  exports: [
    NzOptionComponent,
    NzSelectComponent,
    NzOptionContainerComponent,
    NzOptionGroupComponent,
    NzSelectTopControlComponent
  ]
})
export class NzSelectModule extends LazyComponentModuleBase {
  getComponentByName(key: string) {
    if (key === 'nz-option') {
      return NzOptionComponent;
    }
    if (key === 'nz-select') {
      return NzSelectComponent;
    }
    if (key === 'nz-option-container') {
      return NzOptionContainerComponent;
    }
    if (key === 'nz-option-group') {
      return NzOptionGroupComponent;
    }
    if (key === 'nz-select-top-control') {
      return NzSelectTopControlComponent;
    }
  }
}
