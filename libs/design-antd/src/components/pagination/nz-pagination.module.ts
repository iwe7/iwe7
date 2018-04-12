import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { I18nModule as NzI18nModule } from 'iwe7/i18n';
import { NzSelectModule } from '../select/nz-select.module';

import { NzPaginationComponent } from './nz-pagination.component';

@NgModule({
  declarations: [ NzPaginationComponent ],
  exports     : [ NzPaginationComponent ],
  imports     : [ CommonModule, FormsModule, NzSelectModule, NzI18nModule ]
})

export class NzPaginationModule {
}
