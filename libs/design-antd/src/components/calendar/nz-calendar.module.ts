import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { I18nModule } from 'iwe7/i18n';
import { NzRadioModule } from '../radio/nz-radio.module';
import { NzSelectModule } from '../select/nz-select.module';
import {
  NzDateCellDirective,
  NzDateFullCellDirective,
  NzMonthCellDirective,
  NzMonthFullCellDirective
} from './nz-calendar-cells';
import { NzCalendarHeaderComponent } from './nz-calendar-header.component';
import { NzCalendarComponent } from './nz-calendar.component';
import { LazyComponentModuleBase } from 'iwe7/lazy-load';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    NzCalendarHeaderComponent,
    NzCalendarComponent,
    NzDateCellDirective,
    NzDateFullCellDirective,
    NzMonthCellDirective,
    NzMonthFullCellDirective
  ],
  exports: [
    NzCalendarComponent,
    NzDateCellDirective,
    NzDateFullCellDirective,
    NzMonthCellDirective,
    NzMonthFullCellDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    I18nModule,
    NzRadioModule,
    NzSelectModule,
    RouterModule.forChild([
      {
        path: 'nz-calendar',
        component: NzCalendarComponent
      },
      {
        path: 'nz-date-cell',
        component: NzDateCellDirective
      },
      {
        path: 'nz-date-full-cell',
        component: NzDateFullCellDirective
      },
      {
        path: 'nz-month-full-cell',
        component: NzMonthFullCellDirective
      }
    ])
  ]
})
export class NzCalendarModule extends LazyComponentModuleBase {
  getComponentByName(key: string) {
    if (key === 'nz-calendar') {
      return NzCalendarComponent;
    }
    if (key === 'nz-date-cell') {
      return NzDateCellDirective;
    }
    if (key === 'nz-date-full-cell') {
      return NzDateFullCellDirective;
    }
    if (key === 'nz-month-cell') {
      return NzMonthCellDirective;
    }
    if (key === 'nz-month-full-cell') {
      return NzMonthFullCellDirective;
    }
  }
}
