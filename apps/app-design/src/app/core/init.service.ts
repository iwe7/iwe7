import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InitService {
  roles: any;
  constructor(private http: HttpClient) {}

  init(data: any) {
    let url =
      'https://meepo.com.cn/app/index.php?i=2&do=open&c=entry&m=runner_open&open=appinit';
    return this.http.post(url, data);
  }

  addElements(data: any) {
    let url =
      'https://meepo.com.cn/app/index.php?i=2&do=open&c=entry&m=runner_open&open=elements/add';
    return this.http.post(url, data);
  }

  allElements(data: any) {
    let url =
      'https://meepo.com.cn/app/index.php?i=2&do=open&c=entry&m=runner_open&open=elements/search';
    return this.http.post(url, data);
  }

  getElements(data: any){
    let url =
      'https://meepo.com.cn/app/index.php?i=2&do=open&c=entry&m=runner_open&open=elements/get';
    return this.http.post(url, data);
  }
}
