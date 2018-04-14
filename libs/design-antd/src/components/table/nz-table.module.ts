import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCheckboxModule } from '../checkbox/nz-checkbox.module';
import { NzDropDownModule } from '../dropdown/nz-dropdown.module';
import { I18nModule as NzI18nModule } from 'iwe7/i18n';
import { NzMenuModule } from '../menu/nz-menu.module';
import { NzPaginationModule } from '../pagination/nz-pagination.module';
import { NzRadioModule } from '../radio/nz-radio.module';
import { NzSpinModule } from '../spin/nz-spin.module';

import { NzTableComponent } from './nz-table.component';
import { NzTbodyDirective } from './nz-tbody.directive';
import { NzTdComponent } from './nz-td.component';
import { NzThComponent } from './nz-th.component';
import { NzTheadComponent } from './nz-thead.component';
import { NzTrDirective } from './nz-tr.directive';

@NgModule({
  declarations: [
    NzTableComponent,
    NzThComponent,
    NzTdComponent,
    NzTheadComponent,
    NzTbodyDirective,
    NzTrDirective
  ],
  exports: [
    NzTableComponent,
    NzThComponent,
    NzTdComponent,
    NzTheadComponent,
    NzTbodyDirective,
    NzTrDirective
  ],
  imports: [
    NzMenuModule,
    FormsModule,
    NzRadioModule,
    NzCheckboxModule,
    NzDropDownModule,
    CommonModule,
    NzPaginationModule,
    NzSpinModule,
    NzI18nModule
  ]
})
export class NzTableModule {
  getComponentByName(key: string) {
    if (key === 'nz-table') {
      return NzTableComponent;
    }
    if (key === 'nz-th') {
      return NzThComponent;
    }
    if (key === 'nz-td') {
      return NzTdComponent;
    }
    if (key === 'nz-head') {
      return NzTheadComponent;
    }
    if (key === 'nz-body') {
      return NzTbodyDirective;
    }
    if (key === 'nz-tr') {
      return NzTrDirective;
    }
  }
}
