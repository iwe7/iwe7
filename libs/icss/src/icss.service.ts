import { Injectable, ElementRef } from '@angular/core';
import { Subject, Observable, of, MonoTypeOperatorFunction, merge } from 'rxjs';
import { map, scan, throttle, throttleTime, first } from 'rxjs/operators';
export interface IcssInterface {
  [key: string]: Observable<any>;
}
@Injectable({
  providedIn: 'root'
})
export class IcssService {
  state: any = {};
  constructor() {}
  init(ob: IcssInterface, ele?: ElementRef) {
    const obs: Observable<{ [key: string]: any }>[] = [];
    for (const key in ob) {
      const newOb = ob[key].pipe(
        map(res => {
          return {
            [`${key}`]: res
          };
        })
      );
      obs.push(newOb);
    }
    // 合并流
    const mer = merge(...obs).pipe(
      scan((state, style) => {
        return { ...state, ...style };
      }, {}),
      map(style => {
        this.styledash(ele.nativeElement).set(style);
        return style;
      })
    );
    mer.pipe(first()).subscribe(res => {
      this.state = res;
    });
    mer.subscribe(res => {});
    return mer;
  }

  getState(key?: string) {
    if (!!key) {
      return this.state[key] || {};
    }
    return this.state;
  }

  parse(val: any) {
    return typeof val === 'boolean' ? (!!val ? 1 : 0) : val;
  }

  styledash(target: HTMLElement) {
    return {
      set: (key, val?) => {
        if (typeof key === 'object' && val === undefined) {
          return Object.keys(key).forEach(subKey =>
            this.styledash(target).set(subKey, key[subKey])
          );
        }
        if (typeof val === 'object') {
          return Object.keys(val).forEach(subkey => {
            this.styledash(target).set(`${key}-${subkey}`, val[subkey]);
          });
        }
        return target.style.setProperty(`--${key}`, this.parse(val) as string);
      },
      get: key => target.style.getPropertyValue(`--${key}`)
    };
  }
}
