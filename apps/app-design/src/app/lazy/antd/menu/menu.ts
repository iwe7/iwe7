import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  HostBinding,
  EventEmitter,
  ElementRef
} from '@angular/core';
import { Subject } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MeepoRender } from 'meepo-render';
@Component({
  selector: 'iwe7-menu',
  templateUrl: './menu.html',
  styleUrls: ['./menu.scss']
})
export class MenuComponent implements OnInit {
  @HostBinding('attr.draggable') draggable: boolean = false;

  nzTheme = {
    type: 'select',
    value: 'light',
    options: [
      {
        title: '亮主题',
        value: 'light'
      },
      {
        title: '暗主题',
        value: 'dark'
      }
    ]
  };
  nzInlineIndent = {
    type: 'number',
    value: 24
  };
  nzMode = {
    type: 'select',
    value: 'inline',
    options: [
      { title: '垂直展开', value: 'vertical' },
      { title: '水平展开', value: 'horizontal' },
      { title: '内部展开', value: 'inline' }
    ]
  };

  nzInDropDown: any = {
    type: 'boolean',
    value: false
  };

  nzSelectable: any = {
    type: 'boolean',
    value: false
  };

  nzInlineCollapsed = {
    type: 'boolean',
    value: 'false'
  };

  submenu: any = [
    {
      title: {
        type: 'string',
        value: '菜单标题'
      },
      icon: {
        type: 'icon',
        value: 'anticon anticon-appstore'
      },
      nzOpen: {
        type: 'boolean',
        value: false
      },
      nzDisabled: {
        type: 'boolean',
        value: false
      },
      group: [
        {
          title: {
            type: 'string',
            value: '标题'
          },
          items: [
            {
              title: '菜单1',
              nzDisabled: {
                type: 'boolean',
                value: false
              },
              nzSelected: {
                type: 'boolean',
                value: false
              },
              nzData: {
                type: 'string',
                value: 'item1'
              }
            },
            {
              title: '菜单2',
              nzDisabled: {
                type: 'boolean',
                value: false
              },
              nzSelected: {
                type: 'boolean',
                value: false
              },
              nzData: {
                type: 'string',
                value: 'item1'
              }
            }
          ]
        }
      ]
    }
  ];

  ngOnInit() {}
  click$: Subject<any> = new Subject();
  onClick(item: any) {
    this.click$.next(item.nzData);
  }
}
