import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    const ret = [];
    for (const key in value) {
      ret.push({ key: key, value: value[key] });
    }
    return ret;
  }
}
