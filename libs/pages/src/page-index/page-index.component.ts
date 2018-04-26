import { Component, OnInit, ViewContainerRef, ViewChild, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { MeepoRender } from 'iwe7/render';
import { Subject } from 'rxjs';
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

  pid: number;
  code: string;
  constructor(
    public route: ActivatedRoute,
    public rootView: ViewContainerRef,
    public render: MeepoRender,
    public router: Router
  ) {
    this.route.queryParams.subscribe(res => {
      let { pid, code } = res;
      if (!!pid) {
        this.pid = pid;
        this.render$.next(this.pid);
      } else if (!!code) {
        this.code = code;
        this.render$.next(this.code);
      }
    });
    this.router.events.subscribe(res=>{
      if(res instanceof NavigationEnd){
        this.handlerRender();
      }
    });
  }

  ngOnInit() {
    this.render.setDefaultView(this.rootView);
    this.handlerRender();
    this.render$.subscribe(res => {
      this.handlerRender();
    });
  }

  ngOnDestroy(){
  }

  handlerRender() {
    if (this.pid) {
      this.renderByPid();
    } else {
      this.renderByCode();
    }
  }

  renderByPid() {
    this.render.remove(this.pid);
    this.rootView.clear();
    this.view && this.view.clear();
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
    this.rootView.clear();
    this.view && this.view.clear();
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
