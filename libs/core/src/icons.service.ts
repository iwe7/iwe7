import { Injectable } from '@angular/core';
import { from, merge } from 'rxjs';
import { tap, map, flatMap, switchMap, filter } from 'rxjs/operators';

// 页面管理
@Injectable({
  providedIn: 'root'
})
export class IconsService {
  getIcons() {
    return from(document.styleSheets).pipe(
      // tap
      map((res: any) => {
        if (res.cssRules) {
          return res.cssRules;
        } else {
          return res.rules;
        }
      }),
      switchMap((res: any) => {
        return from(res).pipe(
          // tap
          map((res: any) => {
            return res.selectorText;
          }),
          filter((res: string) => (res + '').startsWith('.anticon')),
          filter(res => res != '.anticon'),
          map(res => {
            return res.replace('::before', '');
          }),
          map(res => {
            return res.replace('.', '');
          }),
          filter(res => res != 'anticon'),
          filter(res => !(res.indexOf(',') > -1)),
          map(res => {
            return res.replace('anticon-', '');
          })
        );
      })
    );
  }
}
