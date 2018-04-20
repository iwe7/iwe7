import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MeepoRender } from 'meepo-render';
@Component({
  selector: 'iwe7-select',
  templateUrl: './select.html',
  styleUrls: ['./select.scss']
})
export class SelectComponent implements OnInit {
  nzSize: any = {
    type: 'select',
    vlaue: 'default',
    options: [
      {
        title: '默认',
        value: 'default'
      },
      {
        title: '大尺寸',
        value: 'large'
      },
      {
        title: '小尺寸',
        value: 'small'
      }
    ]
  };
  nzServerSearch: any = {
    type: 'boolean',
    value: false,
    title: '搜索'
  };
  nzMode: any = {
    type: 'select',
    value: 'default',
    title: '类型',
    options: [
      {
        title: '默认',
        value: 'default'
      },
      {
        title: '多选',
        value: 'multiple'
      },
      {
        title: '标签',
        value: 'tags'
      }
    ]
  };
  nzDropdownMatchSelectWidth: any = {
    type: 'boolean',
    value: true,
    title: '下拉自适应'
  };
  nzMaxMultipleCount: any = {
    type: 'number',
    value: Infinity,
    title: '最多选取'
  };
  nzDropdownStyle: { [key: string]: any } = {};
  get _nzDropdownStyle() {
    let style = {};
    for (let key in this.nzDropdownStyle) {
      style[key] = this.nzDropdownStyle[key].value;
    }
    return style;
  }
  nzNotFoundContent: any = {
    type: 'string',
    value: '没有找到',
    title: '空提示'
  };

  nzDropdownClassName: any = {
    type: 'string',
    value: '',
    title: '下拉样式'
  };

  nzAutoFocus: any = {
    type: 'boolean',
    value: false,
    title: '自动获焦点'
  };

  nzOpen: any = {
    type: 'boolean',
    value: false,
    title: '是否展开'
  };

  nzDisabled: any = {
    type: 'boolean',
    value: false,
    title: '禁用开关'
  };

  nzAllowClear: any = {
    type: 'boolean',
    value: false,
    title: '允许清除'
  };

  nzShowSearch: any = {
    type: 'boolean',
    value: false,
    title: '显示搜索'
  };

  nzPlaceHolder: any = {
    type: 'string',
    value: '请选择',
    title: '提示选择'
  };

  value: any = {
    type: 'string',
    value: 'option',
    title: '默认值'
  };

  options: any = {
    type: 'array',
    value: [
      {
        nzLabel: {
          type: 'string',
          value: 'group'
        },
        type: {
          type: 'string',
          value: 'group'
        },
        options: {
          type: 'group',
          value: [
            {
              nzLabel: {
                type: 'string',
                value: 'group'
              },
              nzValue: {
                type: 'string',
                value: 'group'
              },
              nzDisabled: {
                type: 'boolean',
                value: false
              },
              icon: {
                type: 'icon',
                value: 'anticon anticon-user'
              },
              children: null
            }
          ]
        }
      },
      {
        nzLabel: {
          type: 'string',
          value: 'option'
        },
        type: {
          type: 'string',
          value: 'option'
        },
        nzValue: {
          type: 'string',
          value: 'option'
        },
        nzDisabled: {
          type: 'boolean',
          value: false
        },
        icon: {
          type: 'icon',
          value: 'anticon anticon-user'
        },
        children: null
      }
    ],
    title: '选项'
  };

  isAjax: any = {
    type: 'boolean',
    value: true
  };
  page: any = {
    type: 'number',
    value: 0
  };

  params: any = {};

  url: any = {
    type: 'url',
    value: 'get?i=2'
  };

  width: any = {
    type: 'string',
    value: '120px'
  };

  // 控制是否还有数据
  hasMore: boolean = true;

  constructor(public http: HttpClient, public render: MeepoRender) {}

  ngOnInit() {
    if (this.isAjax.value) {
      this.scrollToBottom();
    }
  }

  scrollToBottom() {
    this.page.value++;
    this.http
      .get(this.url.value, {
        params: { ...this.params, page: this.page.value }
      })
      .pipe(
        tap(res => console.log(res)),
        filter(res => this.hasMore),
        tap(res => {
          if (!res) {
            this.hasMore = false;
          }
        }),
        filter(res => !!res)
      )
      .subscribe(res => {
        if (res) {
          this.options.value.push(res);
        }
      });
  }

  change$: Subject<any> = new Subject();

  modelChange() {
    this.change$.next(this.value.value);
  }
}
