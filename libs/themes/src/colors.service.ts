import { Injectable, InjectionToken, Injector } from '@angular/core';
let colors: Map<string, string> = new Map();

colors.set('navy', '#001F3F');
colors.set('blue', '#0074D9');
colors.set('aqua', '#7FDBFF');
colors.set('teal', '#39CCCC');
colors.set('olive', '#3D9970');
colors.set('green', '#2ECC40');
colors.set('lime', '#01FF70');
colors.set('yellow', '#FFDC00');
colors.set('orange', '#FF851B');
colors.set('red', '#FF4136');
colors.set('fuchsia', '#F012BE');
colors.set('purple', '#B10DC9');
colors.set('maroon', '#85144B');
colors.set('white', '#FFFFFF');
colors.set('silver', '#DDDDDD');
colors.set('gray', '#AAAAAA');
colors.set('black', '#111111');

@Injectable({
  providedIn: 'root'
})
export class ColorsService {
  constructor() {}

  get(key: string) {
    return colors.get(key);
  }

  getAll() {
    let colors2 = [];
    colors.forEach((res, index) => {
      colors2.push({
        key: index,
        data: res
      });
    });
    console.log(colors2);
    return colors2;
  }
}
