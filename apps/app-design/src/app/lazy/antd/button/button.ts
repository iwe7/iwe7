import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  EventEmitter,
  HostBinding,
  ElementRef,
  ViewEncapsulation,
  Input
} from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MeepoRender } from 'meepo-render';
import { IcssService } from 'iwe7-icss';
@Component({
  selector: 'iwe7-button',
  templateUrl: './button.html',
  styleUrls: ['./button.scss']
})
export class ButtonComponent implements OnInit {
  nzGhost: any = {
    type: 'boolean',
    valeu: false
  };
  nzLoading: any = {
    type: 'boolean',
    value: false
  };
  nzSearch: any = {
    type: 'boolean',
    value: false
  };
  nzSize: any = {
    type: 'select',
    value: 'default',
    options: [
      {
        title: '默认',
        value: 'default'
      },
      {
        title: '小尺寸',
        value: 'small'
      },
      {
        title: '大尺寸',
        value: 'large'
      }
    ]
  };
  nzShape: any = {
    type: 'select',
    value: null,
    options: [
      {
        title: '默认',
        value: ''
      },
      {
        title: '圆角',
        value: 'circle'
      }
    ]
  };
  nzType: any = {
    type: 'select',
    value: 'primary',
    options: [
      {
        title: '主要',
        value: 'primary'
      },
      {
        title: '虚线',
        value: 'dashed'
      },
      {
        title: '危险',
        value: 'danger'
      }
    ]
  };

  data: any = {
    type: 'string',
    value: ''
  };

  text: any = {
    type: 'string',
    value: '按钮'
  };

  click$: Subject<any> = new Subject();
  ngOnInit() {}

  @ViewChild('content', { read: ViewContainerRef })
  content: ViewContainerRef;

  click() {
    this.click$.next(this.data);
  }
}
