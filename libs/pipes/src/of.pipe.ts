import { Pipe, PipeTransform, ɵisPromise, ɵisObservable } from '@angular/core';
import { of } from 'rxjs';
@Pipe({
  name: 'of'
})
export class OfPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (ɵisPromise(value)) {
      return value;
    }
    if (ɵisObservable(value)) {
      return value;
    }
    return of(value);
  }
}
