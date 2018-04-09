import { Pipe, PipeTransform } from '@angular/core';
import { add } from 'ramda';
@Pipe({
  name: 'map'
})
export class MapPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (typeof value === 'object') {
      let map = Object.keys(value).map(key => {
        return this._obj2arr(key, value[key]);
      });
      return map;
    }
  }

  private _obj2arr(name: string, value: any) {
    if (typeof value === 'object') {
      return Object.keys(value).map(key => {
        return this._obj2arr(key, value[key]);
      });
    } else {
      return { key: name, item: value };
    }
  }
}
