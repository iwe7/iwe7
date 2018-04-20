import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  EventEmitter,
  HostBinding,
  ElementRef
} from '@angular/core';
import { Subject } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MeepoRender } from 'meepo-render';
@Component({
  selector: 'iwe7-tag',
  templateUrl: './tag.html',
  styleUrls: ['./tag.scss']
})
export class TagComponent implements OnInit {
  @ViewChild('content', {
    read: ViewContainerRef
  })
  content: ViewContainerRef;

  change$: Subject<any> = new Subject();
  close$: Subject<any> = new Subject();
  afterClose$: Subject<any> = new Subject();

  data: any = {
    type: 'string',
    value: ''
  };

  text: any = {
    type: 'string',
    value: '我是内容'
  };

  nzMode: any = {
    type: 'select',
    value: 'default',
    options: [
      {
        title: '默认',
        value: 'default'
      },
      {
        title: '可关闭',
        value: 'closeable'
      },
      {
        title: '可选择',
        value: 'checkable'
      }
    ]
  };

  nzColor: any = {
    type: 'color',
    value: 'green'
  };

  nzChecked: any = {
    type: 'boolean',
    value: false
  };

  @HostBinding('attr.draggable') draggable: boolean = false;

  ngOnInit() {}

  constructor(public ele: ElementRef) {}

  nzCheckedChange(e) {
    this.change$.next(e);
  }

  nzAfterClose() {
    this.afterClose$.next(this.data.value);
  }

  nzOnClose($event: any) {
    this.close$.next($event);
  }
}
