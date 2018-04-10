import { Injectable, InjectionToken, Injector } from '@angular/core';

export const Iwe7Colors = new InjectionToken('Iwe7ThemesColors', {
  providedIn: 'root',
  factory: () => {
    return {
      default: {
        color: '#fff',
        bg: '#4a4c5b'
      },
      disabled: {
        bg: '#ccc',
        color: '#fff'
      },
      light: {
        bg: '#fff',
        color: '#666'
      },
      outline: {
        bg: 'transparent',
        color: '#666'
      },
      primary: {
        bg: '#fc9153',
        color: '#fff'
      }
    };
  }
});
@Injectable({
  providedIn: 'root'
})
export class Iwe7ColorsService {
  constructor(public injector: Injector) {}

  getColor(key: string) {
    return (<any>this.injector.get(Iwe7Colors)).get(key);
  }

  getRandomColor() {
    return `#${`00000${((Math.random() * 0x1000000) << 0).toString(16)}`.substr(
      -6
    )}`;
  }
}
