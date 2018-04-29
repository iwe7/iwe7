import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UrlService } from 'iwe7/utils';
@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.scss']
})
export class TablePageComponent implements OnInit {
  code: string;

  tabs: any[] = [
    {
      title: '数据管理'
    },
    {
      title: '数据统计'
    },
    {
      title: '添加数据'
    },
    {
      title: '导出数据'
    },
    {
      title: '导入数据'
    }
  ];
  constructor(
    public route: ActivatedRoute,
    public http: HttpClient,
    public url: UrlService
  ) {
    this.route.queryParams.subscribe(res => {
      let { code } = res;
      this.code = code || '';
    });
  }

  ngOnInit() {
    let url = this.url.getUrl('elements/page', { code: this.code || '' });
    this.http.get(url).subscribe((res: any) => {
      let { data } = res;
      console.log(data);
    });
  }
}
