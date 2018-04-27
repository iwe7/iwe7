import {
  Component,
  OnInit,
  ViewContainerRef,
  ViewChild,
  OnDestroy
} from '@angular/core';
import { MeepoRender } from 'iwe7/render';
import { Subject } from 'rxjs';
import { parseURL } from 'iwe7/we7-location';

@Component({
  selector: 'page-index',
  templateUrl: './page-index.component.html',
  styleUrls: ['./page-index.component.scss']
})
export class PageIndexComponent implements OnInit, OnDestroy {
  @ViewChild('view', {
    read: ViewContainerRef
  })
  view: ViewContainerRef;
  render$: Subject<any> = new Subject();

  pid: any;
  code: string;
  constructor(public rootView: ViewContainerRef, public render: MeepoRender) {}

  ngOnInit() {
    this.render.setDefaultView(this.rootView);
    this.handlerRender();
    this.render$.subscribe(res => {
      this.handlerRender();
    });
  }

  ngOnDestroy() {
    this.render.remove(this.pid);
    this.render.removeByCode(this.code);
    this.rootView.clear();
    this.view && this.view.clear();
  }

  handlerRender() {
    let parse = parseURL();
    let { pid, code } = parse;
    if (!!pid) {
      this.pid = pid;
    } else if (!!code) {
      this.code = code;
    }
    if (this.pid) {
      this.renderByPid();
    } else {
      this.renderByCode();
    }
  }

  renderByPid() {
    console.log('renderByPid');
    this.render
      .showElement({ $loki: this.pid }, {}, {}, this.view)
      .subscribe((res: any) => {
        res.subscribe(item => {
          this.handler(res);
        });
      });
  }

  handler(res) {
    console.log(res);
  }

  renderByCode() {
    console.log('renderByCode');
    this.render
      .showElement({ code: this.code }, {}, {}, this.view)
      .subscribe((res: any) => {
        res.subscribe(item => {
          this.handler(res);
        });
      });
  }
}
