import { Pipe, PipeTransform } from '@angular/core';
import { I18nService } from 'iwe7/i18n/src/i18n.service';

@Pipe({
  name: 'i18n'
})
export class I18nPipe implements PipeTransform {
  constructor(private _locale: I18nService) {}

  transform(path: string, keyValue?: object): string {
    return this._locale.translate(path, keyValue);
  }
}

@Pipe({
  name: 'nzI18n'
})
export class NzI18nPipe implements PipeTransform {
  constructor(private _locale: I18nService) {}

  transform(path: string, keyValue?: object): string {
    return this._locale.translate(path, keyValue);
  }
}

