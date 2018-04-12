import { Injectable, InjectionToken, Inject, SkipSelf } from '@angular/core';
import { DatePipe, registerLocaleData } from '@angular/common';
import zh_CN from './languages/zh_CN';

import { zhcn, extra } from './zh-cn/index';
registerLocaleData(zhcn, 'zh-cn', extra);

export const NZ_I18N = new InjectionToken<NzI18nInterface>('nz-i18n', {
  providedIn: 'root',
  factory: () => zh_CN
});

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  _locale: any;
  constructor(public datePipe: DatePipe, @Inject(NZ_I18N) locale: any) {
    this.setLocale(locale);
    this._locale = locale;
  }

  translate(path: string, data?: any): string {
    let content = this._getObjectPath(this._locale, path) as string;
    if (typeof content === 'string') {
      if (data) {
        Object.keys(data).forEach(
          key =>
            (content = content.replace(new RegExp(`%${key}%`, 'g'), data[key]))
        );
      }
      return content;
    }
    return path;
  }
  setLocale(locale: NzI18nInterface): void {
    this._locale = locale;
  }

  getLocale(): NzI18nInterface {
    return this._locale;
  }
  formatDate(date: Date, format: string): string {
    let local = this.getLocale();
    // local.local = 'zh-cn'
    let re = this.datePipe.transform(date, format, null, local.locale);
    return re;
  }
  private _getObjectPath(obj: object, path: string): string | object {
    let res = obj;
    const paths = path.split('.');
    const depth = paths.length;
    let index = 0;
    while (res && index < depth) {
      res = res[paths[index++]];
    }
    return index === depth ? res : null;
  }
}

export interface NzPaginationI18nInterface {
  items_per_page: string;
  jump_to: string;
  jump_to_confirm: string;
  page: string;

  // Pagination.jsx
  prev_page: string;
  next_page: string;
  prev_5: string;
  next_5: string;
  prev_3: string;
  next_3: string;
}

export interface NzDatePickerI18nInterface {
  lang: {
    placeholder: string;
    rangePlaceholder: string[];
    today: string;
    now: string;
    backToToday: string;
    ok: string;
    clear: string;
    month: string;
    year: string;
    timeSelect: string;
    dateSelect: string;
    monthSelect: string;
    yearSelect: string;
    decadeSelect: string;
    yearFormat: string;
    dateFormat: string;
    dayFormat: string;
    dateTimeFormat: string;
    monthBeforeYear?: boolean;
    previousMonth: string;
    nextMonth: string;
    previousYear: string;
    nextYear: string;
    previousDecade: string;
    nextDecade: string;
    previousCentury: string;
    nextCentury: string;
  };
  timePickerLocale: NzTimePickerI18nInterface;
}

export interface NzTimePickerI18nInterface {
  placeholder: string;
}

export interface NzCalendarI18nInterface {
  today: string;
  now: string;
  backToToday: string;
  ok: string;
  clear: string;
  month: string;
  year: string;
  timeSelect: string;
  dateSelect: string;
  monthSelect: string;
  yearSelect: string;
  decadeSelect: string;
  yearFormat: string;
  dateFormat: string;
  dayFormat: string;
  dateTimeFormat: string;
  monthBeforeYear?: boolean;
  previousMonth: string;
  nextMonth: string;
  previousYear: string;
  nextYear: string;
  previousDecade: string;
  nextDecade: string;
  previousCentury: string;
  nextCentury: string;
}

export interface NzI18nInterface {
  locale: string;
  Pagination: NzPaginationI18nInterface;
  DatePicker: NzDatePickerI18nInterface;
  TimePicker: NzTimePickerI18nInterface;
  Calendar: NzCalendarI18nInterface;
  Table: {
    filterTitle: string;
    filterConfirm: string;
    filterReset: string;
    emptyText: string;
    selectAll: string;
    selectInvert: string;
  };
  Modal: {
    okText: string;
    cancelText: string;
    justOkText: string;
  };
  Popconfirm: {
    okText: string;
    cancelText: string;
  };
  Transfer: {
    titles?: string[];
    notFoundContent: string;
    searchPlaceholder: string;
    itemUnit: string;
    itemsUnit: string;
  };
  Select: {
    notFoundContent: string;
  };
  Upload: {
    uploading: string;
    removeFile: string;
    uploadError: string;
    previewFile: string;
  };
}
