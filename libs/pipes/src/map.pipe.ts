import { Pipe, PipeTransform } from '@angular/core';
import { add } from 'ramda';
@Pipe({
  name: 'map'
})
export class MapPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let items = add(1)(2)
    return items;
  }
}
