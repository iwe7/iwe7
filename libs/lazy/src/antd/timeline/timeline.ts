import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  EventEmitter,
  HostBinding,
  ElementRef,
  ViewEncapsulation
} from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MeepoRender } from 'meepo-render';
import { IcssService } from 'iwe7-icss';
@Component({
  selector: 'iwe7-timeline',
  templateUrl: './timeline.html',
  styleUrls: ['./timeline.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TimelineComponent implements OnInit {
  nzPending: any = {
    type: 'timeline',
    value: false
  };

  list: any = {
    type: 'list',
    items: [
      {
        title: {
          type: 'string',
          value: '标题1'
        },
        nzDot: {
          type: 'string',
          value: '2017'
        },
        nzColor: {
          type: 'color',
          value: 'red'
        },
        children: {}
      },
      {
        title: {
          type: 'string',
          value: '标题2'
        },
        nzDot: {
          type: 'string',
          value: '2018'
        },
        nzColor: {
          type: 'color',
          value: 'green'
        },
        children: {}
      }
    ]
  };

  width: any = {
    type: 'style',
    value: '40px'
  };

  get _nzPending() {
    return this.nzPending.value;
  }
  ngOnInit() {}

  constructor(public render: MeepoRender, public icss: IcssService) {}

  setView(e: any, item: any) {
    if (item.children && item.children.selector) {
      this.render.compiler(item.children, e).subscribe();
    }
  }

  getContent(e: ElementRef) {
    let item$: BehaviorSubject<any> = new BehaviorSubject({
      left: this.width.value
    });
    this.icss
      .init(
        {
          item: item$
        },
        e
      )
      .subscribe();
  }
}
