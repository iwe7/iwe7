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
  selector: 'iwe7-tabs',
  templateUrl: './tabs.html',
  styleUrls: ['./tabs.scss']
})
export class TabsComponent implements OnInit {
  tabs: any = {
    type: 'list',
    value: [
      {
        title: {
          type: 'string',
          value: 'Tab1'
        },
        children: {
          selector: 'nz-span',
          inputs: {
            text: {
              value: 'Tab1 的内容'
            }
          }
        }
      },
      {
        title: {
          type: 'string',
          value: 'Tab2'
        },
        children: {
          selector: 'nz-span',
          inputs: {
            text: {
              value: 'Tab2 的内容'
            }
          }
        }
      },
      {
        title: {
          type: 'string',
          value: 'Tab3'
        },
        children: {
          selector: 'nz-span',
          inputs: {
            text: {
              value: 'Tab3 的内容'
            }
          }
        }
      }
    ]
  };
  change$: Subject<any> = new Subject();
  constructor(private render: MeepoRender) {}
  ngOnInit() {}

  setView(e, item) {
    if (item.children) {
      this.render.compiler(item.children, e).subscribe((res: any) => {
        this.change$.next(res.data);
      });
    }
  }
}
