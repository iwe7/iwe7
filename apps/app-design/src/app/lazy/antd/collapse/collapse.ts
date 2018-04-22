import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  EventEmitter,
  HostBinding,
  ElementRef,
  ViewEncapsulation,
  Input,
  OnChanges
} from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MeepoRender } from 'meepo-render';
import { IcssService } from 'iwe7-icss';

@Component({
  selector: 'iwe7-collapse',
  templateUrl: './collapse.html',
  styleUrls: ['./collapse.scss']
})
export class CollapseComponent implements OnInit {
  panels: any[] = [];
  change$: Subject<any> = new Subject();
  constructor(public render: MeepoRender) {}
  ngOnInit() {}
  setView(e, panel) {
    if (panel.children) {
      this.render.compiler(panel.children, e).subscribe((res: any) => {
        console.log(res);
        this.change$.next(res.data);
      });
    }
  }
}
