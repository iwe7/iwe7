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
import { NzSelectTplComponent } from './nz-select-tpl';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OverlayModule,
    NzI18nModule
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
    NzSelectUnselectableDirective,
    NzSelectTplComponent
  ],
  exports: [
    NzOptionComponent,
    NzSelectComponent,
    NzOptionContainerComponent,
    NzOptionGroupComponent,
    NzSelectTopControlComponent,
    NzSelectTplComponent
  ],
  entryComponents: [
    NzOptionComponent,
    NzSelectComponent,
    NzOptionContainerComponent,
    NzOptionGroupComponent,
    NzSelectTopControlComponent,
    NzSelectTplComponent
  ]
})
export class NzSelectModule extends LazyComponentModuleBase {
  getComponentByName(key: string) {
    if (key === 'nz-option') {
      return NzOptionComponent;
    }
    if (key === 'nz-select') {
      return NzSelectTplComponent;
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
