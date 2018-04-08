import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'map'
})
export class MapPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    const items = Object.keys(value).map(key => {
      value[key].key = key;
      return value[key];
    });
    return items;
  }
}
